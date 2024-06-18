'use server'

import { createRoomSchema } from '@/app/(shared)/room/create-room'
import { redirect } from 'next/navigation'
import { z } from 'zod'

export async function createRoom(room: z.infer<typeof createRoomSchema>) {
  // TODO: implement the feature so it really create a room
  redirect(`/room/${room.username}`)
}
