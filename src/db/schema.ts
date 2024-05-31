import { InferInsertModel, InferSelectModel } from 'drizzle-orm'
import { pgTable, serial, text } from 'drizzle-orm/pg-core'

export const RoomsTable = pgTable('room', {
  id: serial('id').primaryKey(),
  hostName: text('text').notNull(),
  shareCode: text('text').notNull(),
})

export type Room = InferSelectModel<typeof RoomsTable>
export type NewRoom = InferInsertModel<typeof RoomsTable>
