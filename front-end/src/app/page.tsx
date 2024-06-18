import Core from '@/app/(shared)/core'
import CreateRoom from '@/app/(shared)/room/create-room'
import ListRoom from '@/app/(shared)/room/list-room'
import { Button } from '@/components/ui/button'
import { PlayIcon } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen p-5 space-y-5">
      <h1 className="text-center text-2xl font-bold">Tinder restaurant</h1>
      <CreateRoom />
      <Core />

      <Button className="w-full">
        {' '}
        <PlayIcon className="size-4 mr-2" /> Lancer la session
      </Button>
      {/* <ListRoom /> */}
    </main>
  )
}
