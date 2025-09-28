import type { NextFunction, Request, Response } from 'express'
import type { ZodType } from 'zod'

const validate = (
  schema: ZodType<unknown>,
  property: 'body' | 'query' | 'params' = 'body'
) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[property])
    if (!result.success) {
      return next(result.error)
    }
    req[property] = result.data
    next()
  }
}

export default validate
