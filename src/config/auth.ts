import { env } from './validation'

export const authConfig = {
  jwt: {
    secret: env.JWT_SECRET,
    expiresIn: env.JWT_EXPIRES_IN || '15m',
    refreshSecret: env.JWT_REFRESH_SECRET,
    refreshExpiresIn: env.JWT_REFRESH_EXPIRES_IN || '7d'
  },
  bcrypt: {
    rounds: Number(env.BCRYPT_ROUNDS)
  }
}
