import { websiteUrl } from '@/app/config'
import ShareButton from '@/components/share-button'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import useSocketRoom from '@/utils/hook/useSocketRoom'
import { micah } from '@dicebear/collection'
import { createAvatar } from '@dicebear/core'
import Image from 'next/image'
import Link from 'next/link'
import JoinRoom from './join-room'

export default function Room({ id }: { id: RoomId }) {
  const { getRoom } = useSocketRoom()
  const room = getRoom(id)

  if (room === null) {
    return <div>try to load {id}...</div>
  }

  // TODO: implement that
  // const isInThisRoom: boolean = false
  const isInThisRoom: boolean = true
  if (!isInThisRoom) {
    return <JoinRoom host={room.host} participantsNumber={2} />
  }

  return (
    <>
      <h1 className="text-center text-2xl font-semibold">
        Room de {room.host.username}
      </h1>
      <section className="grid grid-cols-3 gap-2">
        <Participant {...room.host} />

        {room.participants &&
          room.participants.map((participant, i) => (
            <Participant
              key={`participant-${i}`}
              username={participant.username}
            />
          ))}
        {}
      </section>

      <section className="mx-auto flex flex-col gap-2">
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
  const avatar = createAvatar(micah, {
    seed: 'Loki',
  })

  return (
    <Card className="p-2">
      <CardHeader className="p-0">
        <figure className="size-16 mx-auto">
          <Image
            src={avatar.toDataUri()}
            alt={`Avatar of ${username}`}
            width={256}
            height={256}
          />
        </figure>
      </CardHeader>

      <CardContent className="p-0">
        <h2 className="break-words text-center">{username}</h2>
      </CardContent>
    </Card>
  )
}
