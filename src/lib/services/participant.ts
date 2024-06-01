'use server'

import { createParticipantSchema } from '@/app/shared/participant/create-participant'
import { db } from '@/db'
import { NewParticipant, participants } from '@/db/schema'
import { redirect } from 'next/navigation'
import { z } from 'zod'

export async function createParticipant(
  participant: z.infer<typeof createParticipantSchema>,
  roomId: string
) {
  const newParticipant: NewParticipant = {
    userName: participant.username,
    roomId,
  }
  await db.insert(participants).values(newParticipant)

  redirect(`/room/${roomId}`)
}
