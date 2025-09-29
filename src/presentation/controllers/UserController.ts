import type { NextFunction, Request, Response } from 'express'
import { UserService } from '@/business/services/UserService'
import { SUCCESS } from '@/shared/constants'

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UserService.createUser(req.body)
    res.status(201).json({ success: true, data: user })
  } catch (err) {
    next(err)
  }
}

export const listUsers = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await UserService.listUsers()
    res.json({ data: users })
  } catch (err) {
    next(err)
  }
}

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const user = await UserService.getUser(id)
    res.json({ success: true, data: user })
  } catch (err) {
    next(err)
  }
}

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    await UserService.deleteUser(id)
    res.status(200).json({ success: true, message: SUCCESS.USER.DELETE })
  } catch (err) {
    next(err)
  }
}

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const updateUser = await UserService.updateUser(id, req.body)
    res.status(200).json({ success: true, data: updateUser })
  } catch (err) {
    next(err)
  }
}
