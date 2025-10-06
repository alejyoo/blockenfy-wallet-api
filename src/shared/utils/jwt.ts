import bcrypt from 'bcrypt'
import { jwtVerify, SignJWT } from 'jose'
import { authConfig as config } from '@/config/auth'
import type { JwtPayload } from '../types'

export const generateToken = async (payload: JwtPayload): Promise<string> => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(config.jwt.expiresIn)
    .sign(new TextEncoder().encode(config.jwt.secret))
}

export const verifyToken = async (token: string): Promise<JwtPayload> => {
  const { payload } = await jwtVerify(
    token,
    new TextEncoder().encode(config.jwt.secret)
  )
  return payload as JwtPayload
}

export const hashPassword = async (password: string): Promise<string> => {
  const rounds = config.bcrypt.rounds
  return await bcrypt.hash(password, rounds)
}

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hash)
}
