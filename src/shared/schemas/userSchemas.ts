import { z } from 'zod'
import {
  customIdSchemas,
  displayNameSchemas,
  userIdSchemas
} from './commonSchemas'

export const createUserSchema = z.object({
  displayName: displayNameSchemas,
  customId: customIdSchemas
})

export const getUserSchema = z.object({
  id: userIdSchemas
})
