import { z } from 'zod'
import { customIdSchemas, displayNameSchemas } from './commonSchemas'

export const createUserSchema = z.object({
  displayName: displayNameSchemas,
  customId: customIdSchemas
})
