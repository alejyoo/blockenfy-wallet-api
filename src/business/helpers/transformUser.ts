import type { User } from '@/generated/prisma'
import type { SafeUser } from '@/shared/types'

const transformUser = (user: User): SafeUser => {
  const { password: _password, ...safeUser } = user
  return safeUser
}

export default transformUser
