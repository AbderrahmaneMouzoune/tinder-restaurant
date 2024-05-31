'use client'
import Room from '@/app/shared/room/room'
// import { getRoom } from '@/lib/services/room'

export default function PageRoot({
  params,
}: {
  params: {
    roomId: string
  }
}) {
  // const room = await getRoom(params.roomId)
  return <Room id={params.roomId} hostName={params.roomId} />
}
