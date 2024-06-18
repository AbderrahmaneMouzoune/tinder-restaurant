import { useEffect, useState } from 'react'
import { useSocketIoClient } from './useSocketIoClient'

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
  }, [clientSocket, roomId])

  return room
}

export default useGetRoomInfo
