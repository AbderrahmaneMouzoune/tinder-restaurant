'use server'

import { createRoomSchema } from '@/app/shared/room/create-room'
import { redirect } from 'next/navigation'
import { z } from 'zod'

export async function createRoom(room: z.infer<typeof createRoomSchema>) {
  redirect(`/room/${room.username}`)
}
