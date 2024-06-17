'use client'
import { Button } from '@/components/ui/button'
import { socket } from '@/socket'
import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
  const [rooms, setRooms] = useState<Room[]>()

  const onGetRooms = () => {
    socket.emit('room.get')
  }

  socket.on('room.get.success', (roomsFromServer: Room[]) =>
    setRooms(roomsFromServer)
  )
  socket.on('room.get.failed', (err) => console.log(err))

  return (
    <div>
      <Button onClick={onGetRooms}>Get all rooms</Button>

      {rooms &&
        rooms?.length > 0 &&
        rooms?.map((room) => (
          <p key={room.id}>
            Room{' '}
            <Link href={`/socket/rooms/${room.id}`} target="_blank">
              {room.id}
            </Link>{' '}
            created by {room.host.username}{' '}
          </p>
        ))}
    </div>
  )
}
