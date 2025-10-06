import type { Request, Response } from 'express'
import { TransactionService } from '@/business/services'
import { asyncHandler } from '@/presentation/middleware'
import { SUCCESS } from '@/shared/constants'
import { sendResponse } from '@/shared/utils'

export const recharge = asyncHandler(async (req: Request, res: Response) => {
  const { identifier, amount } = req.body
  const updatedUser = await TransactionService.recharge(identifier, amount)
  return sendResponse({
    res,
    message: SUCCESS.TRANSACTION.RECHARGE,
    data: updatedUser
  })
})

export const sendTransaction = asyncHandler(
  async (req: Request, res: Response) => {
    const { sender, receiver, amount } = req.body
    const tx = await TransactionService.send(sender, receiver, amount)
    return sendResponse({
      res,
      message: SUCCESS.TRANSACTION.SEND,
      data: tx
    })
  }
)
