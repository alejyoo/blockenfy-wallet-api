import { UserRepository } from '@/infrastructure/database/repositories/UserRepository'
import { ERRORS } from '@/shared/constants'
import { HttpError } from '@/shared/exceptions'

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
