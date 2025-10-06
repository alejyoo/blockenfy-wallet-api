import { z } from 'zod'
import { customIdSchemas, displayNameSchemas } from './commonSchemas'

export const registerSchema = z.object({
  email: z.string().toLowerCase().trim(),
  password: z.string().min(8),
  displayName: displayNameSchemas.optional(),
  customId: customIdSchemas.optional()
})

export const loginSchema = z.object({
  email: z.string(),
  password: z.string()
})
