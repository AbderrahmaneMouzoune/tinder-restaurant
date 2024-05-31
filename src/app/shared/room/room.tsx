import { websiteUrl } from '@/app/config'
import ShareButton from '@/components/share-button'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Link from 'next/link'
import { Room as RoomProps } from '@/db/schema'

export default function Room({ id, hostName, shareCode }: RoomProps) {
  return (
    <>
      <h1 className="text-center py-2">Room of {hostName}</h1>
      <section className="grid grid-cols-2 p-2 gap-2">
        {Array.from({ length: 3 })
          .fill(null)
          .map((_, i) => (
            <Participant
              key={`participant-${i}`}
              name={`participant-${i}`}
              avatar={'https://placehold.co/600x400/png'}
            />
          ))}
      </section>
      <section className="mx-auto p-2 flex flex-col gap-2">
        <ShareButton
          url={`${websiteUrl}/room/${shareCode}`}
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

function Participant({ name, avatar }: { name: string; avatar: string }) {
  return (
    <Card>
      <CardContent className="w-full pt-2 pb-2">
        <div className="bg-gray-100 dark:bg-gray-900 rounded-xl mx-auto size-32" />
      </CardContent>
      <CardFooter>{name}</CardFooter>
    </Card>
  )
}
