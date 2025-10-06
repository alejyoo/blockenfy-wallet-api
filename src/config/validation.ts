import { z } from 'zod'
import 'dotenv/config'

export const envSchema = z.object({
  PORT: z
    .string()
    .default('3000')
    .transform(val => parseInt(val, 10)),
  NODE_ENV: z
    .enum(['development', 'production', 'test', 'staging'])
    .default('development'),
  API_PREFIX: z
    .string()
    .default('/api')
    .refine(val => val.startsWith('/')),
  API_VERSION: z.string().default('v1'),
  POSTGRES_USER: z.string().min(1),
  POSTGRES_PASSWORD: z.string().min(1),
  POSTGRES_DB: z.string().min(1),
  DATABASE_URL: z.url(),
  JWT_SECRET: z.string().min(32),
  JWT_EXPIRES_IN: z.string().default('15m'),
  JWT_REFRESH_SECRET: z.string().min(32),
  JWT_REFRESH_EXPIRES_IN: z.string().default('7d'),
  BCRYPT_ROUNDS: z.string()
})

export type EnvType = z.infer<typeof envSchema>
export const env = envSchema.parse(process.env)
