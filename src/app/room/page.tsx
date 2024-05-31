import { getAllRooms } from '@/lib/services/room'
import Link from 'next/link'

export default async function Page() {
  const rooms = await getAllRooms()

  return (
    <section>
      <h1>Fetched {rooms.length}</h1>

      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            {room.hostName} -{' '}
            <Link href={`/room/${room.shareCode}`}>{room.shareCode}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
