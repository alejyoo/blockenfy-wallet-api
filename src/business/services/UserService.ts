import { findUserOrThrow } from '@/business/helpers'
import { UserRepository } from '@/infrastructure/database/repositories/UserRepository'
import { ERRORS } from '@/shared/constants'
import { HttpError } from '@/shared/exceptions'

export const UserService = {
  async createUser(data: { displayName: string; customId?: string }) {
    if (data.customId) {
      const existingUser = await findUserOrThrow(data.customId)

      if (existingUser) throw new HttpError(ERRORS.CUSTOM_ID.IS_EXIST, 409)
    }

    return await UserRepository.createUser(data)
  },

  async listUsers() {
    return await UserRepository.listUsers()
  },

  async getUser(identifier: string) {
    return await findUserOrThrow(identifier)
  },

  async deleteUser(identifier: string) {
    const user = await findUserOrThrow(identifier)
    if (!user) throw new HttpError(ERRORS.USER.EXIST, 404)

    return await UserRepository.deleteUser(user.id)
  },

  async updateUser(
    identifier: string,
    data: { displayName?: string; customId?: string }
  ) {
    const user = await findUserOrThrow(identifier)

    if (
      (!data.displayName || data.displayName === user.displayName) &&
      (!data.customId || data.customId === user.customId)
    ) {
      throw new HttpError(ERRORS.USER.NO_CHANGES, 400)
    }

    if (data.customId && data.customId !== user.customId) {
      const existing = await UserRepository.getUserdByCustomId(data.customId)
      if (existing) throw new HttpError(ERRORS.CUSTOM_ID.IS_EXIST, 409)
    }

    return await UserRepository.updateUser(user.id, data)
  }
}
