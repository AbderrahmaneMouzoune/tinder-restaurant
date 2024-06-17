'use client'
import { Button } from '@/components/ui/button'
import useRooms from '@/utils/hook/useRooms'
import Link from 'next/link'

export default function Page() {
  const { rooms, getRooms } = useRooms()

  return (
    <div>
      <Button onClick={getRooms}>Refresh rooms</Button>

      <h1>Il y a {rooms.length} rooms</h1>

      {rooms && rooms.length > 0 && (
        <ul className="list-item">
          {rooms.map((room) => (
            <li key={room.id}>
              <Link href={`/socket/rooms/${room.id}`} target="_blank">
                [{room.id}] - created by {room.host.username}, (
                {room.participants.length}P)
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
