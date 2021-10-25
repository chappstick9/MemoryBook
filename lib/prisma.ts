import { PrismaClient } from '@prisma/client'
import { Optional } from '@Util/types'

let globalConnection: Optional<PrismaClient> = undefined

export function getPrismaConnection(): PrismaClient {
  if (!globalConnection) {
    globalConnection = new PrismaClient()
  }
  return globalConnection!
}
