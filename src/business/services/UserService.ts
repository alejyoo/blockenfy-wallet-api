import { findUserOrThrow } from '@/business/helpers'
import { UserRepository } from '@/infrastructure/database/repositories/UserRepository'
import { ERRORS } from '@/shared/constants'
import { HttpError } from '@/shared/exceptions'
import type { CreateUserDTO, SafeUser, UpdateUserDTO } from '@/shared/types'
import { findUserByIdentifier } from '../helpers/findUserByIdentifier'

export const UserService = {
  async createUser(data: CreateUserDTO): Promise<SafeUser> {
    if (data.customId) {
      const existing = await findUserByIdentifier(data.customId)
      if (existing) throw new HttpError(ERRORS.CUSTOM_ID.ALREADY_EXISTS, 409)
    }

    return await UserRepository.create(data)
  },

  async listUsers(): Promise<SafeUser[]> {
    return await UserRepository.list()
  },

  async getUser(identifier: string): Promise<SafeUser> {
    return await findUserOrThrow(identifier)
  },

  async deleteUser(identifier: string): Promise<void> {
    const user = await findUserOrThrow(identifier)
    await UserRepository.delete(user.id)
  },

  async updateUser(identifier: string, data: UpdateUserDTO): Promise<SafeUser> {
    const user = await findUserOrThrow(identifier)

    if (
      (!data.displayName || data.displayName === user.displayName) &&
      (!data.customId || data.customId === user.customId)
    ) {
      throw new HttpError(ERRORS.USER.NO_CHANGES, 400)
    }

    if (data.customId && data.customId !== user.customId) {
      const existing = await UserRepository.findByCustomId(data.customId)
      if (existing) throw new HttpError(ERRORS.CUSTOM_ID.ALREADY_EXISTS, 409)
    }

    return await UserRepository.update(user.id, data)
  }
}
