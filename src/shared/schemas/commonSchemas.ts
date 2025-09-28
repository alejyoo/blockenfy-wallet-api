import { z } from 'zod'
import { ERRORS } from '../constants'

export const userIdSchemas = z
  .string()
  .nonempty(ERRORS.USER.REQUIRED)
  .min(3, ERRORS.USER.TOO_SHORT)
  .max(30, ERRORS.USER.TOO_LONG)
  .regex(/^[a-zA-Z0-9_-]+$/, ERRORS.USER.INVALID)
  .trim()

export const amountSchemas = z
  .number()
  .positive(ERRORS.AMOUNT.POSITIVE)
  .max(1_000_000, ERRORS.AMOUNT.MAX)
  .refine(val => Number.isFinite(val), ERRORS.AMOUNT.NAN)
  .refine(
    val => /^\d+(\.\d{1,2})?$/.test(val.toString()),
    ERRORS.AMOUNT.DECIMALS
  )

export const displayNameSchemas = z
  .string()
  .min(3, ERRORS.DISPLAY_NAME.TOO_SHORT)
  .max(30, ERRORS.DISPLAY_NAME.TOO_LONG)
  .regex(/^[a-zA-Z0-9 ]+$/, ERRORS.DISPLAY_NAME.INVALID)
  .transform(val => val.replace(/\s+/g, ' ').trim())

export const customIdSchemas = z
  .string()
  .min(3, ERRORS.CUSTOM_ID.TOO_SHORT)
  .max(30, ERRORS.CUSTOM_ID.TOO_LONG)
  .regex(/^[a-zA-Z0-9_-]+$/, ERRORS.CUSTOM_ID.INVALID)
  .trim()
  .optional()
