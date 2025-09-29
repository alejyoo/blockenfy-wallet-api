import { prisma } from '../connection'

export const UserRepository = {
  createUser: (data: { displayName: string; customId?: string }) =>
    prisma.user.create({ data }),

  getUserById: (id: string) => prisma.user.findUnique({ where: { id } }),

  getUserdByCustomId: (customId: string) =>
    prisma.user.findUnique({ where: { customId } }),

  listUsers: () => prisma.user.findMany(),

  deleteUser: (id: string) => prisma.user.delete({ where: { id } }),

  updateUser: (
    id: string,
    data: { displayName?: string; customId?: string; balance?: number }
  ) => prisma.user.update({ where: { id }, data })
}
