import type { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'
import { ERRORS } from '@/shared/constants'
import { log } from '@/shared/utils'

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
    return res.status(500).json({ success: false, error: err.message })
  }

  return res.status(500).json({ success: false, error: ERRORS.INTERNAL_ERROR })
}

export default errorHandler
