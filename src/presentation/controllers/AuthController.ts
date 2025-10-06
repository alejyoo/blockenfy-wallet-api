import type { Request, Response } from 'express'
import { AuthService } from '@/business/services'
import { asyncHandler } from '@/presentation/middleware'
import { SUCCESS } from '@/shared/constants'
import { sendResponse } from '@/shared/utils'

export const register = asyncHandler(async (req: Request, res: Response) => {
  const result = await AuthService.register(req.body)
  return sendResponse({
    res,
    status: 201,
    message: SUCCESS.AUTH.REGISTER,
    data: result
  })
})

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body
  const result = await AuthService.login(email, password)
  return sendResponse({
    res,
    message: SUCCESS.AUTH.LOGIN,
    data: result
  })
})
