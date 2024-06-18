'use client'
import Room from '@/app/(shared)/room/room'
import { ProvideSocketIoClient } from '@/utils/context/SocketIoProvider'

type PageProps = {
  params: {
    roomId: RoomId
  }
}

export default function PageRoot({ params }: PageProps) {
  return (
    <ProvideSocketIoClient>
      <Room
        id={params.roomId}
        host={{
          username: 'abd',
        }}
        restaurants={[]}
        participants={[]}
      />
    </ProvideSocketIoClient>
  )
}
