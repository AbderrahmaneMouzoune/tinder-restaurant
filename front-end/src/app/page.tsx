import Core from '@/app/(shared)/core'
import CreateProfile from '@/app/(shared)/profile/create-profile'
import CreateRoom from '@/app/(shared)/room/create-room'

export default function Home() {
  return (
    <main className="min-h-screen p-5 space-y-2">
      <h1 className="text-center text-2xl font-bold">Tinder restaurant</h1>
      <CreateProfile />
      <Core />

      <CreateRoom />
      {/* <ListRoom /> */}
    </main>
  )
}
