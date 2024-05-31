import { integer, text, boolean, pgTable } from 'drizzle-orm/pg-core'

export const room = pgTable('room', {
  id: integer('id').primaryKey(),
  hostName: text('text').notNull(),
})
