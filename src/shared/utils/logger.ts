import { createLogger, format, transports } from 'winston'
import { serverConfig as config } from '@/config'

const logFormat = format.printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level}: ${message}`
})

const log = createLogger({
  level: config.nodeEnv === 'development' ? 'debug' : 'info',
  format: format.combine(
    format.errors({ stack: true }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.json()
  ),
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), logFormat)
    }),
    new transports.File({ filename: 'logs/errors.log', level: 'error' })
  ]
})

export default log
