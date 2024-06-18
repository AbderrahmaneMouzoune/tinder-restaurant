import { useState, useEffect } from 'react'
import { useSocketIoClient } from './useSocketIoClient'

type SocketRoomUtilities = {
  getRoom(roomId: RoomId): Room | null
}

function useSocketRoom(): SocketRoomUtilities {
  return {
    getRoom: useGetRoomInfo,
  }
}

function useGetRoomInfo(roomId: RoomId): Room | null {
  const [room, setRoom] = useState<Room | null>(null)

  const clientSocket = useSocketIoClient()

  useEffect(() => {
    if (!clientSocket) return

    const receiveRoomHandler = (receivedRoom: Room) => {
      setRoom(receivedRoom)
    }
    clientSocket.send('room.get', roomId)

    clientSocket.subscribe('room.get.success', receiveRoomHandler)

    return () => {
      clientSocket.off('room.get.success', receiveRoomHandler)
    }
  }, [clientSocket, roomId])

  return room
}

export default useSocketRoom
