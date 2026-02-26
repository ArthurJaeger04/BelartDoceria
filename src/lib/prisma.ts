import { PrismaClient } from '@prisma/client'

// Esta lógica evita que o Next.js crie várias conexões em desenvolvimento
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma