import { UserRepository } from '@/infrastructure/database/repositories/UserRepository'
import { ERRORS } from '@/shared/constants'
import { HttpError } from '@/shared/exceptions'

export const UserService = {
  async createUser(data: { displayName: string; customId?: string }) {
    if (data.customId) {
      const existingUser = await UserRepository.findByCustomId(data.customId)

      if (existingUser) throw new HttpError(ERRORS.CUSTOM_ID.IS_EXIST, 409)
    }

    return await UserRepository.createUser(data)
  },

  async listUsers() {
    return await UserRepository.listUsers()
  },

  async getUserByIdOrCustomId(idOrCustomId: string) {
    let userById = await UserRepository.getUserById(idOrCustomId)
    if (!userById) {
      userById = await UserRepository.findByCustomId(idOrCustomId)
    }

    if (!userById) throw new HttpError(ERRORS.USER.EXIST, 404)

    return userById
  }
}
