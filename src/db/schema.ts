import { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import { pgTable, serial, text } from 'drizzle-orm/pg-core'

export const rooms = pgTable('rooms', {
  id: serial('id').primaryKey(),
  hostName: text('hostName').notNull(),
  shareCode: text('shareCode').unique().notNull(),
})

export type Room = InferSelectModel<typeof rooms>
export type NewRoom = InferInsertModel<typeof rooms>
