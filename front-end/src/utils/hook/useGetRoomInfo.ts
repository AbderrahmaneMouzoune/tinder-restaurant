import { socket } from '@/socket'
import { useEffect, useState } from 'react'

function useGetRoomInfo(roomId: RoomId): {
  room: Room | null
} {
  const [room, setRoom] = useState<Room | null>(null)

  useEffect(() => {
    socket.emit('room.get', roomId)
  }, [roomId])

  socket.on('room.get.success', (room: Room) => setRoom(room))

  return { room }
}

export default useGetRoomInfo
