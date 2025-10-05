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
  DATABASE_URL: z.url()
})

export type EnvType = z.infer<typeof envSchema>
export const env = envSchema.parse(process.env)
