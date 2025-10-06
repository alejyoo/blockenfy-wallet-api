import { findUserOrThrow } from '@/business/helpers'
import { prisma } from '@/infrastructure/database/connection'
import { UserRepository } from '@/infrastructure/database/repositories'
import { ERRORS } from '@/shared/constants'
import { HttpError } from '@/shared/exceptions'
import type { SafeUser, TransactionResult } from '@/shared/types'

export const TransactionService = {
  async recharge(identifier: string, amount: number): Promise<SafeUser> {
    const user = await findUserOrThrow(identifier)

    const newBalance = Number(user.balance) + amount

    return await UserRepository.update(user.id, { balance: newBalance })
  },
  async send(
    senderIdentifier: string,
    receiverIdentifier: string,
    amount: number
  ): Promise<TransactionResult> {
    return await prisma.$transaction(async tx => {
      const sender = await findUserOrThrow(senderIdentifier)
      const receiver = await findUserOrThrow(receiverIdentifier)

      if (sender.id === receiver.id) {
        throw new HttpError(ERRORS.TRANSACTION.SELF_SEND, 400)
      }

      const senderBalance = Number(sender.balance)
      if (senderBalance < amount) {
        throw new HttpError(ERRORS.TRANSACTION.INSUFFICIENT_BALANCE, 400)
      }

      const newSenderBalance = senderBalance - amount
      const newReceiverBalance = Number(receiver.balance) + amount

      await tx.user.update({
        where: { id: sender.id },
        data: { balance: newSenderBalance }
      })

      await tx.user.update({
        where: { id: receiver.id },
        data: { balance: newReceiverBalance }
      })

      return {
        senderId: sender.id,
        receiverId: receiver.id,
        amount
      }
    })
  }
}
