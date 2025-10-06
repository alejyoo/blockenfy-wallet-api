import { UserRepository } from '@/infrastructure/database/repositories'

export async function findUserByIdentifier(identifier: string) {
  const user =
    (await UserRepository.findById(identifier)) ||
    (await UserRepository.findByCustomId(identifier))
  return user ?? null
}
