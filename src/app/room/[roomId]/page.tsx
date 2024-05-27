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
  return <h1>Hello from room : {params.roomId}</h1>
}
