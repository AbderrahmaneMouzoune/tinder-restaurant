import { websiteUrl } from '@/app/config'
import ShareButton from '@/components/share-button'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Participant as ParticipantProps, Room as RoomProps } from '@/db/schema'
import { getParticipantForRoom } from '@/lib/services/room'
import Link from 'next/link'

export default async function Room({ id, hostName, shareCode }: RoomProps) {
  const participants = await getParticipantForRoom(shareCode)
  return (
    <>
      <h1 className="text-center py-2">Room of {hostName}</h1>
      <section className="grid md:grid-cols-2 p-2 gap-2">
        {participants?.length > 0 &&
          participants?.map((participant, i) => (
            <Participant key={participant.id} {...participant} />
          ))}
      </section>
      <section className="mx-auto p-2 flex flex-col gap-2">
        <ShareButton
          url={`${websiteUrl}/room/join/${shareCode}`}
          title={`Rejoignez la room de ${hostName}`}
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

function Participant({ userName }: ParticipantProps) {
  return (
    <Card className="flex items-center gap-5 p-2">
      <div className="bg-gray-100 dark:bg-gray-900 rounded-xl mx-auto size-16" />
      <CardContent className="p-0 grow">{userName}</CardContent>
    </Card>
  )
}
