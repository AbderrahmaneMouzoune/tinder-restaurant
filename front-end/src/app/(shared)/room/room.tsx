import { websiteUrl } from '@/app/config'
import ShareButton from '@/components/share-button'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import useRooms from '@/utils/hook/useRooms'
import {
  useIsSocketConnected,
  useSocketIoClient,
} from '@/utils/hook/useSocketIoClient'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Room({ id }: { id: RoomId }) {
  const room: Room = {
    id,
    host: {
      username: 'abd',
    },
    restaurants: [],
    participants: [],
  }
  const [participants, setParticipants] = useState<Profile[]>([])

  const clientSocket = useSocketIoClient()
  const isSocketConnected = useIsSocketConnected()

  useEffect(() => {
    if (!clientSocket) return

    clientSocket.subscribe(
      'room.participant.created',
      (receivedParticipants: Profile[]) => setParticipants(receivedParticipants)
    )
  }, [clientSocket])

  return (
    <>
      <h1 className="text-center py-2">Room of {room.host.username}</h1>
      <h2 className="text-center">
        Actually{' '}
        <span
          className={isSocketConnected ? 'text-green-500' : 'text-yellow-500'}
        >
          {isSocketConnected ? 'Online' : 'Try to reconnect...'}
        </span>
      </h2>
      <section className="grid grid-cols-2 p-2 gap-2">
        {participants &&
          participants.map((participant, i) => (
            <Participant
              key={`participant-${i}`}
              username={participant.username}
            />
          ))}
      </section>
      <section className="mx-auto p-2 flex flex-col gap-2">
        <ShareButton
          url={`${websiteUrl}/room/${id}`}
          title={`Rejoignez la room de ${room.host.username}`}
          text={''}
        >
          Partager le lien
        </ShareButton>
        <Button asChild>
          <Link href={'/'}>Lancer la session</Link>
        </Button>
      </section>
    </>
  )
}

function Participant({ username }: Profile) {
  return (
    <Card>
      <CardContent className="w-full pt-2 pb-2">
        <div className="bg-gray-100 dark:bg-gray-900 rounded-xl mx-auto size-32" />
      </CardContent>
      <CardFooter>{username}</CardFooter>
    </Card>
  )
}
