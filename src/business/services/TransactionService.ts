import { UserRepository } from '@/infrastructure/database/repositories'
import { findUserOrThrow } from '@/business/helpers'

export const TransactionService = {
  async recharge(identifier: string, amount: number) {
    const user = await findUserOrThrow(identifier)

    const newBalance = Number(user.balance) + amount

    return await UserRepository.updateUser(user.id, { balance: newBalance })
  },

  async send(
    senderIdentifier: string,
    receiverIdentifier: string,
    amount: number
  ) {
    const sender = await findUserOrThrow(senderIdentifier)
    const receiver = await findUserOrThrow(receiverIdentifier)

    const newSenderBalance = Number(sender.balance) - amount
    const newReceiverBalance = Number(receiver.balance) + amount

    await UserRepository.updateUser(sender.id, { balance: newSenderBalance })
    await UserRepository.updateUser(receiver.id, {
      balance: newReceiverBalance
    })

    return { senderId: sender.id, receiverId: receiver.id, amount }
  }
}
