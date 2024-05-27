import Core from '@/app/shared/core'
import CreateRoom from '@/app/shared/room/create-room'

export default function Home() {
  return (
    <main className="min-h-screen p-5 space-y-5">
      <CreateRoom />
      <Core />
    </main>
  )
}
