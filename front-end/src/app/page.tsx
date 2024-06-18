import Core from '@/app/(shared)/core'
import CreateRoom from '@/app/(shared)/room/create-room'
import ListRoom from '@/app/(shared)/room/list-room'

export default function Home() {
  return (
    <main className="min-h-screen p-5 space-y-5">
      <h1 className="text-center text-2xl font-bold">Tinder restaurant</h1>
      <CreateRoom />
      <Core />
      {/* <ListRoom /> */}
    </main>
  )
}
