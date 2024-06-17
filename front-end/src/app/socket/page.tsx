'use client'
import { Button } from '@/components/ui/button'
import { socket } from '@/socket'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export default function Page() {
  const [room, setRoom] = useState<Room>()

  const onCreateRoom = () => {
    const roomId = nanoid(10)
    const newRoom: Room = {
      id: roomId,
      host: {
        username: 'skulbraz',
      },
      restaurants: [],
      participants: [],
    }

    socket.emit('room.create', newRoom)
  }

  socket.on(
    'room.create.success',
    (room: Room, rooms: Record<RoomId, Room>) => {
      setRoom(room)
    }
  )

  socket.on('room.create.failed', (err) => {
    console.log(err)
  })

  return (
    <div>
      <Button onClick={onCreateRoom}>Create a room</Button>

      {room && (
        <p>
          Room {room.id} created by {room.host.username}
        </p>
      )}
    </div>
  )
}
