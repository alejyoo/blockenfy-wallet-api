import { prisma } from '../connection'

export const UserRepository = {
  create: (data: {
    displayName?: string
    customId?: string
    password: string
    email: string
  }) => {
    return prisma.user.create({ data })
  },

  findById: (id: string) => {
    return prisma.user.findUnique({ where: { id } })
  },

  findByEmail: (email: string) => {
    return prisma.user.findUnique({ where: { email } })
  },

  findByCustomId: (customId: string) => {
    return prisma.user.findUnique({ where: { customId } })
  },

  list: () => {
    return prisma.user.findMany()
  },

  update: (
    id: string,
    data: {
      displayName?: string
      customId?: string
      balance?: number
      currency?: string
    }
  ) => {
    return prisma.user.update({ where: { id }, data })
  },

  delete: (id: string) => {
    return prisma.user.delete({ where: { id } })
  }
}
