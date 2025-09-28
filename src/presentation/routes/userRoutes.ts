import { Router } from 'express'
import { createUser } from '@/presentation/controllers/UserController'
import { validate } from '@/presentation/middleware'
import { createUserSchema } from '@/shared/schemas'

const router = Router()

router.post('/', validate(createUserSchema, 'body'), createUser)

export default router
