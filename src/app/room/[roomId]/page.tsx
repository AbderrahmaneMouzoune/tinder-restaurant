import Room from '@/app/shared/room/room'
import React from 'react'
// import { getRoom } from '@/lib/services/room'

export default async function PageRoot({
  params,
}: {
  params: {
    roomId: string
  }
}) {
  // const room = await getRoom(params.roomId)
  return <Room id={params.roomId} hostName={params.roomId} />
}
