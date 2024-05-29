'use client'
import Room from '@/app/shared/room/room'
// import { getRoom } from '@/lib/services/room'
import { socket } from '@/socket'

export default function PageRoot({
  params,
}: {
  params: {
    roomId: string
  }
}) {
  socket.emit('join-room', params.roomId)
  // const room = await getRoom(params.roomId)
  return <Room id={params.roomId} hostName={params.roomId} />
}
