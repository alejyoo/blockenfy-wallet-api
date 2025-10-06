import { Router } from 'express'
import { authLimiter } from '@/config/rateLimit'
import { login, register } from '@/presentation/controllers/AuthController'
import { validate } from '@/presentation/middleware'
import { loginSchema, registerSchema } from '@/shared/schemas'

const router = Router()

router.use(authLimiter)

router.post('/register', validate(registerSchema, 'body'), register)
router.post('/login', validate(loginSchema, 'body'), login)

export default router
