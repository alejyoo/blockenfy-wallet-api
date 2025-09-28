import { env } from './validation'

export const serverConfig = {
  port: env.PORT,
  nodeEnv: env.NODE_ENV,
  apiPrefix: env.API_PREFIX,
  apiVersion: env.API_VERSION,
  apiBasePath: `${env.API_PREFIX}/${env.API_VERSION}`
}
