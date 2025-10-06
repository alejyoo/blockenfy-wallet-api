import { Router } from 'express'
import {
  createUser,
  deleteUser,
  getUser,
  listUsers,
  updateUser
} from '@/presentation/controllers/UserController'
import { authorize, authorizeOwner, validate } from '@/presentation/middleware'
import {
  createUserSchema,
  getUserSchema,
  updateUserSchema
} from '@/shared/schemas'
import { authenticate } from '../middleware/authenticate'

const router = Router()

router.use(authenticate)

router.get('/', authorize('ADMIN'), listUsers)

router.post(
  '/',
  authorize('ADMIN'),
  validate(createUserSchema, 'body'),
  createUser
)

router.get(
  '/:id',
  validate(getUserSchema, 'params'),
  authorizeOwner('id'),
  getUser
)

router.put(
  '/:id',
  validate(updateUserSchema, 'body'),
  authorizeOwner('id'),
  updateUser
)

router.delete('/:id', authorizeOwner('id'), deleteUser)

export default router
