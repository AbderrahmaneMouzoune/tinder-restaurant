import { socket } from '@/socket'
import { useEffect, useState } from 'react'

function useRooms(): {
  rooms: Room[]
  getRooms(): void
} {
  const [rooms, setRooms] = useState<Room[]>([])

  useEffect(() => {
    const handleGetRoomsSuccess = (newRooms: Room[]) => {
      setRooms(newRooms)
    }

    socket.on('room.get.success', handleGetRoomsSuccess)
    socket.on('room.create.success', (lastRoomCreated, updatedRooms) => {
      console.log('new room')
      handleGetRoomsSuccess(updatedRooms)
    })

    return () => {
      socket.off('room.get.success', handleGetRoomsSuccess)
    }
  })

  const getRooms = () => {
    socket.emit('room.get')
  }

  return { rooms, getRooms }
}

export default useRooms
