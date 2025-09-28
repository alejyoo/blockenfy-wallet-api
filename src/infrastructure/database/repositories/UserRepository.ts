import { prisma } from '../connection'

export const UserRepository = {
  createUser: (data: { displayName: string; customId?: string }) =>
    prisma.user.create({ data }),

  getUserById: (id: string) => prisma.user.findUnique({ where: { id } }),

  findByCustomId: (customId: string) =>
    prisma.user.findUnique({ where: { customId } }),

  listUsers: () => prisma.user.findMany()
}
