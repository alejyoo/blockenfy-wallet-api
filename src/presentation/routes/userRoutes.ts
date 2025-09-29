import { Router } from 'express'
import {
  createUser,
  listUsers,
  getUser,
  deleteUser,
  updateUser
} from '@/presentation/controllers/UserController'
import { validate } from '@/presentation/middleware'
import {
  createUserSchema,
  getUserSchema,
  updateUserSchema
} from '@/shared/schemas'

const router = Router()

router.get('/', listUsers)
router.post('/', validate(createUserSchema, 'body'), createUser)

router.get('/:id', validate(getUserSchema, 'params'), getUser)
router.delete('/:id', deleteUser)
router.put('/:id', validate(updateUserSchema, 'body'), updateUser)

export default router
