import type { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'
import { ERRORS } from '@/shared/constants'
import { log } from '@/shared/utils'

interface ErrorWithStatusCode extends Error {
  statusCode?: number
}

const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  log.error(err)

  if (err instanceof ZodError) {
    const message = err.issues[0]?.message || ERRORS.INTERNAL_ERROR
    return res.status(400).json({ success: false, error: message })
  }

  if (err instanceof Error) {
    const errorWithStatus = err as ErrorWithStatusCode
    const statusCode = errorWithStatus.statusCode || 500
    return res.status(statusCode).json({ success: false, error: err.message })
  }

  return res.status(500).json({ success: false, error: ERRORS.INTERNAL_ERROR })
}

export default errorHandler
