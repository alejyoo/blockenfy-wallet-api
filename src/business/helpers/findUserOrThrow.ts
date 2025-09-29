import { UserRepository } from '@/infrastructure/database/repositories/UserRepository'
import { HttpError } from '@/shared/exceptions'
import { ERRORS } from '@/shared/constants'

export async function findUserOrThrow(identifier: string) {
  let user = await UserRepository.getUserById(identifier)

  if (!user) {
    user = await UserRepository.getUserdByCustomId(identifier)
  }

  if (!user) {
    throw new HttpError(ERRORS.USER.EXIST, 404)
  }

  return user
}
