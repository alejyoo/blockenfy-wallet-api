import type { Response } from 'express'

type SendResponseParams<T> = {
  res: Response
  status?: number
  message?: string
  data?: T
}

const sendResponse = <T>({
  res,
  status = 200,
  message = 'OK',
  data
}: SendResponseParams<T>) => {
  return res.status(status).json({
    success: status >= 200 && status < 300,
    status,
    message,
    data
  })
}

export default sendResponse
