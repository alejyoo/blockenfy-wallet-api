import type { NextFunction, Request, Response } from 'express'
import { UserRepository } from '@/infrastructure/database/repositories'
import { ERRORS } from '@/shared/constants'
import { HttpError } from '@/shared/exceptions'
import type { UserRole } from '@/shared/types'
import { verifyToken } from '@/shared/utils'

export const authenticate = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new HttpError(ERRORS.PERMISSION.AUTH_REQUIRED, 401)
    }

    const token = authHeader.substring(7)

    const payload = await verifyToken(token)

    const user = await UserRepository.findById(payload.userId)

    if (!user) {
      throw new HttpError(ERRORS.USER.NOT_FOUND, 401)
    }

    req.user = {
      id: user.id,
      email: user.email,
      role: user.role as UserRole
    }

    next()
  } catch (error) {
    if (error instanceof HttpError) {
      return next(error)
    }

    return next(new HttpError(ERRORS.PERMISSION.PERMISSION_DENIED, 401))
  }
}
