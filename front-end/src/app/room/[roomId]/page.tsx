'use client'
import Room from '@/app/(shared)/room/room'

type PageProps = {
  params: {
    roomId: RoomId
  }
}

export default function PageRoot({ params }: PageProps) {
  return <Room id={params.roomId} />
}
