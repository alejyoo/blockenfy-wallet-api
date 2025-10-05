import type { NextFunction, Request, Response } from 'express'
import { TransactionService } from '@/business/services'

export const recharge = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { identifier, amount } = req.body

    const updatedUser = await TransactionService.recharge(identifier, amount)

    res.status(200).json({ success: true, data: updatedUser })
  } catch (err) {
    next(err)
  }
}

export const sendTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { sender, receiver, amount } = req.body
    const tx = await TransactionService.send(sender, receiver, amount)
    res.status(200).json({ success: true, data: tx })
  } catch (err) {
    next(err)
  }
}
