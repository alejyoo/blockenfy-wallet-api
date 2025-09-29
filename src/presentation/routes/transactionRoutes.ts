import { Router } from 'express'
import { validate } from '@/presentation/middleware'
import { rechargeSchema, transactionSchema } from '@/shared/schemas'
import { recharge, sendTransaction } from '@/presentation/controllers'

const router = Router()

router.post('/recharge', validate(rechargeSchema, 'body'), recharge)
router.post('/send', validate(transactionSchema, 'body'), sendTransaction)

export default router
