import { Router } from 'express'
import {
  createUser,
  listUsers,
  getUser
} from '@/presentation/controllers/UserController'
import { validate } from '@/presentation/middleware'
import { createUserSchema, getUserSchema } from '@/shared/schemas'

const router = Router()

router.get('/', listUsers)
router.post('/', validate(createUserSchema, 'body'), createUser)
router.get('/:id', validate(getUserSchema, 'params'), getUser)

export default router
