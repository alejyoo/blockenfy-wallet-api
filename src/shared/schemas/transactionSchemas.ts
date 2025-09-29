import { z } from 'zod'
import { amountSchemas, userIdSchemas } from './commonSchemas'

export const rechargeSchema = z.object({
  identifier: userIdSchemas,
  amount: amountSchemas
})

export const transactionSchema = z.object({
  sender: userIdSchemas,
  receiver: userIdSchemas,
  amount: amountSchemas
})
