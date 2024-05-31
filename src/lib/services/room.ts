'use server'

import { createRoomSchema } from '@/app/shared/room/create-room'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { db } from '@/db'
import { Room, rooms } from '@/db/schema'
import { generateUniqueCode } from '@/lib/generate-unique-code'
import { eq } from 'drizzle-orm'

export async function createRoom(room: z.infer<typeof createRoomSchema>) {
  const shareCode = generateUniqueCode()
  await db.insert(rooms).values({
    hostName: room.username,
    shareCode,
  })

  redirect(`/room/${shareCode}`)
}

export async function getRoomByShareCode(
  shareCode: string
): Promise<Room | null> {
  const room = await db
    .select()
    .from(rooms)
    .where(eq(rooms.shareCode, shareCode))
    .limit(1)
  return room[0] || null
}

export async function getAllRooms() {
  return await db.select().from(rooms)
}
