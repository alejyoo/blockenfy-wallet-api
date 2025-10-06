import { transformUser } from '@/business/helpers'
import { UserRepository } from '@/infrastructure/database/repositories/UserRepository'
import { ERRORS } from '@/shared/constants'
import { HttpError } from '@/shared/exceptions'
import type { AuthResponse, RegisterDTO } from '@/shared/types'
import { comparePassword, generateToken, hashPassword } from '@/shared/utils'

export const AuthService = {
  async register(data: RegisterDTO): Promise<AuthResponse> {
    const existingEmail = await UserRepository.findByEmail(data.email)
    if (existingEmail) {
      throw new HttpError(ERRORS.AUTH.EMAIL_ALREADY_EXISTS, 409)
    }

    if (data.customId) {
      const existingCustomId = await UserRepository.findByCustomId(
        data.customId
      )
      if (existingCustomId) {
        throw new HttpError(ERRORS.CUSTOM_ID.ALREADY_EXISTS, 409)
      }
    }

    const hashed = await hashPassword(data.password)
    const user = await UserRepository.create({
      ...data,
      password: hashed
    })

    const token = await generateToken({
      userId: user.id,
      email: user.email
    })
    return { user: transformUser(user), token }
  },

  async login(email: string, password: string): Promise<AuthResponse> {
    const user = await UserRepository.findByEmail(email)
    if (!user) {
      throw new HttpError(ERRORS.AUTH.INVALID_CREDENTIALS, 401)
    }

    const isValid = await comparePassword(password, user.password)
    if (!isValid) {
      throw new HttpError(ERRORS.AUTH.INVALID_CREDENTIALS, 401)
    }

    const token = await generateToken({
      userId: user.id,
      email: user.email
    })

    return { user: transformUser(user), token }
  }
}
