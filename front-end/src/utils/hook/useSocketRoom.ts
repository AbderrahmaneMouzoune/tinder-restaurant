import { useState, useEffect } from 'react'
import { useSocketIoClient } from './useSocketIoClient'

type SocketRoomUtilities = {
  getRoom(roomId: RoomId): Room | null
  addOneParticipantToRoom(participant: Profile, roomId: RoomId): Profile | null
}

function useSocketRoom(): SocketRoomUtilities {
  return {
    getRoom: useGetRoomInfo,
    addOneParticipantToRoom: useAddParticipantToRoom,
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

function useAddParticipantToRoom(
  participant: Profile,
  roomId: RoomId
): Profile | null {
  const [lastParticipant, setLastParticipant] = useState<Profile | null>(null)

  const clientSocket = useSocketIoClient()

  useEffect(() => {
    if (!clientSocket) return

    const receiveRoomHandler = (receivedParticipant: Profile) => {
      setLastParticipant(receivedParticipant)
    }

    clientSocket.send('room.join', participant, roomId)

    clientSocket.subscribe('room.join.success', receiveRoomHandler)

    return () => {
      clientSocket.off('room.join.success', receiveRoomHandler)
    }
  }, [clientSocket, participant, roomId])

  return lastParticipant
}

export default useSocketRoom
