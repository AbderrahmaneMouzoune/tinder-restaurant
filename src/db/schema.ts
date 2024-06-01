import { InferInsertModel, InferSelectModel, relations } from 'drizzle-orm'
import { pgTable, serial, text } from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'

export const rooms = pgTable('rooms', {
  id: serial('id').primaryKey(),
  hostName: text('hostName').notNull(),
  shareCode: text('shareCode').unique().notNull(),
})

export const insertRoomSchema = createInsertSchema(rooms)
const selectRoomSchema = createSelectSchema(rooms)

export const roomsRelations = relations(rooms, ({ many }) => ({
  participants: many(participants),
}))

export const participants = pgTable('participants', {
  id: serial('id').primaryKey(),
  userName: text('userName').notNull(),
  roomId: text('room_shareCode')
    .notNull()
    .references(() => rooms.shareCode),
})

export const participantsRelations = relations(participants, ({ one }) => ({
  roomId: one(rooms, {
    fields: [participants.roomId],
    references: [rooms.shareCode],
  }),
}))

export type Room = InferSelectModel<typeof rooms>
export type NewRoom = InferInsertModel<typeof rooms>

export type Participant = InferSelectModel<typeof participants>
export type NewParticipant = InferInsertModel<typeof participants>
