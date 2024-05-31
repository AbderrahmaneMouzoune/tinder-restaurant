'use server'

import { createRoomSchema } from '@/app/shared/room/create-room'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { db } from '@/db'
import { RoomsTable } from '@/db/schema'
import { generateUniqueCode } from '@/lib/generate-unique-code'

export async function createRoom(room: z.infer<typeof createRoomSchema>) {
  const shareCode = generateUniqueCode()
  await db.insert(RoomsTable).values({
    hostName: room.username,
    shareCode,
  })

  redirect(`/room/${shareCode}`)
}
