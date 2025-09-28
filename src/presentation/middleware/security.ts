import cors, { type CorsOptions } from 'cors'
import type express from 'express'
import type { Application } from 'express'
import helmet, { type HelmetOptions } from 'helmet'
import morgan, { type StreamOptions } from 'morgan'
import { serverConfig as config } from '@/config'
import log from '@/shared/utils/logger'

const configHelmet = (): HelmetOptions => ({
  contentSecurityPolicy: false,
  crossOriginResourcePolicy: { policy: 'same-origin' }
})

const configCors = (): CorsOptions => ({
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true
})

const configMorgan = (app: Application) => {
  const isDev = config.nodeEnv === 'development'

  const stream: StreamOptions = {
    write: (message: string) => log.info(message.trim())
  }
  app.use(morgan(isDev ? 'dev' : 'combined', { stream }))
}

const securityMiddleware = (app: express.Application) => {
  app.use(helmet(configHelmet()))
  app.use(cors(configCors()))
  configMorgan(app)
}

export default securityMiddleware
