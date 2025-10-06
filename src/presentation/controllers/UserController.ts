import type { Request, Response } from 'express'
import { UserService } from '@/business/services/UserService'
import { asyncHandler } from '@/presentation/middleware'
import { SUCCESS } from '@/shared/constants'
import { sendResponse } from '@/shared/utils'

export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await UserService.createUser(req.body)
  return sendResponse({
    res,
    status: 201,
    message: SUCCESS.USER.CREATE,
    data: user
  })
})

export const listUsers = asyncHandler(async (_req: Request, res: Response) => {
  const users = await UserService.listUsers()
  return sendResponse({
    res,
    message: SUCCESS.USER.LIST,
    data: users
  })
})

export const getUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params
  const user = await UserService.getUser(id)
  return sendResponse({
    res,
    message: SUCCESS.USER.FETCH,
    data: user
  })
})

export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params
  await UserService.deleteUser(id)
  return sendResponse({
    res,
    message: SUCCESS.USER.DELETE
  })
})

export const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params
  const updatedUser = await UserService.updateUser(id, req.body)
  return sendResponse({
    res,
    message: SUCCESS.USER.UPDATE,
    data: updatedUser
  })
})
