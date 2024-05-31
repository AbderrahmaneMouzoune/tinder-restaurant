import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { rooms } from './schema'

if (!process.env.NEON_DATABASE_URL) {
  throw new Error('NEON_DATABASE_URL must be a Neon postgres connection string')
}

const sql = neon(process.env.NEON_DATABASE_URL!)

export const db = drizzle(sql, {
  schema: { ...rooms },
})
