import type { NextFunction, Request, Response } from 'express'
import { ERRORS } from '@/shared/constants'
import { HttpError } from '@/shared/exceptions'
import type { UserRole } from '@/shared/types'

export const authorize = (...allowedRoles: UserRole[]) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new HttpError(ERRORS.PERMISSION.AUTH_REQUIRED, 401)
      }

      if (!allowedRoles.includes(req.user.role)) {
        throw new HttpError(ERRORS.PERMISSION.PERMISSION_DENIED, 403)
      }

      next()
    } catch (error) {
      next(error)
    }
  }
}

export const authorizeOwner = (paramName: string = 'id') => {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new HttpError(ERRORS.PERMISSION.AUTH_REQUIRED, 401)
      }

      const resourceId = req.params[paramName]

      if (req.user.role === 'ADMIN') {
        return next()
      }

      if (req.user.id !== resourceId) {
        throw new HttpError(ERRORS.PERMISSION.OWNER_ONLY, 403)
      }

      next()
    } catch (error) {
      next(error)
    }
  }
}
