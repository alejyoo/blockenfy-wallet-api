import type { User as PrismaUser } from '@/generated/prisma'
export type SafeUser = Omit<PrismaUser, 'password'>

export interface CreateUserDTO {
  email: string
  password: string
  displayName?: string
  customId?: string
}

export interface UpdateUserDTO {
  displayName?: string
  customId?: string
}
export interface LoginDTO {
  email: string
  password: string
}

export interface RegisterDTO extends CreateUserDTO {}

export interface AuthResponse {
  user: SafeUser
  token: string
}

export interface RechargeDTO {
  identifier: string
  amount: number
}

export interface TransferDTO {
  sender: string
  receiver: string
  amount: number
}

export interface TransactionResult {
  senderId: string
  receiverId: string
  amount: number
}

export type JwtPayload = {
  userId: string
  email: string
}

export type UserRole = 'ADMIN' | 'USER'

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string
        email: string
        role: UserRole
      }
    }
  }
}
