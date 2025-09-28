import { env } from './validation'

export const databaseConfig = {
  user: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
  dbName: env.POSTGRES_DB,
  url: env.DATABASE_URL
}
