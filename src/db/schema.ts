import { InferInsertModel, InferSelectModel, relations } from 'drizzle-orm'
import { pgTable, serial, text } from 'drizzle-orm/pg-core'

export const rooms = pgTable('rooms', {
  id: serial('id').primaryKey(),
  hostName: text('hostName').notNull(),
  shareCode: text('shareCode').unique().notNull(),
})

export const roomsRelations = relations(rooms, ({ many }) => ({
  participants: many(participants),
}))

export const participants = pgTable('participants', {
  id: serial('id').primaryKey(),
  userName: text('userName').notNull(),
  avatar: text('avatar').notNull(),
})

export const participantsRelations = relations(participants, ({ one }) => ({
  roomAuthor: one(rooms, {
    fields: [participants.userName],
    references: [rooms.id],
  }),
}))

export type Room = InferSelectModel<typeof rooms>
export type NewRoom = InferInsertModel<typeof rooms>

export type Participant = InferSelectModel<typeof participants>
export type NewParticipant = InferInsertModel<typeof participants>
