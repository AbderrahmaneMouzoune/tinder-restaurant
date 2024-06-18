'use client'
import Room from '@/app/(shared)/room/room'
import { Button } from '@/components/ui/button'
import { ProvideSocketIoClient } from '@/utils/context/SocketIoProvider'
import { TrackPreviousIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

type PageProps = {
  params: {
    roomId: RoomId
  }
}

export default function PageRoot({ params }: PageProps) {
  return (
    <ProvideSocketIoClient roomId={params.roomId}>
      <Button asChild>
        <Link href="/">
          <TrackPreviousIcon className="size-4 mr-2" />
          Go back
        </Link>
      </Button>
      <Room id={params.roomId} />
    </ProvideSocketIoClient>
  )
}
