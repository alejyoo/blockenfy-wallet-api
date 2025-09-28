import type { NextFunction, Request, Response } from 'express'
import { UserRepository } from '@/infrastructure/database/repositories/UserRepository'
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UserRepository.createUser(req.body)
    res.status(201).json({ success: true, data: user })
  } catch (err) {
    next(err)
  }
}
