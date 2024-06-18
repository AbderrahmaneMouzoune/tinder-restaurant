import { socket } from '@/socket'
import { useEffect, useState } from 'react'

function useGetRoomInfo(roomId: RoomId): Room | null {
  const [room, setRoom] = useState<Room | null>(null)

  useEffect(() => {
    const handleRoomGetSuccess = (room: Room) => {
      console.log('Room ?', room)
      setRoom(room)
    }

    socket.emit('room.get', roomId)
    socket.on('room.get.success', handleRoomGetSuccess)

    return () => {
      socket.off('room.get.success', handleRoomGetSuccess)
    }
  }, [roomId])

  return room
}

export default useGetRoomInfo
