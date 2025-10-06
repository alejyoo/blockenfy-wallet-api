import { UserRepository } from '@/infrastructure/database/repositories/UserRepository'
import { ERRORS } from '@/shared/constants'
import { HttpError } from '@/shared/exceptions'

export async function findUserOrThrow(identifier: string) {
  let user = await UserRepository.findById(identifier)

  if (!user) {
    user = await UserRepository.findByCustomId(identifier)
  }

  if (!user) {
    throw new HttpError(ERRORS.USER.NOT_FOUND, 404)
  }

  return user
}
