import { PrismaClient } from '@/generated/prisma/index'
import { log } from '@/shared/utils'

const prisma = new PrismaClient()

export const connectDatabase = async (): Promise<void> => {
  try {
    await prisma.$connect()
    log.info('☁️ Database connected successfully')
  } catch (error) {
    log.error('⛈️ An error occurred while connecting to the database', error)
    process.exit(1)
  }
}

export const disconnectedDatabase = async (): Promise<void> => {
  await prisma.$disconnect()
}

export { prisma }
