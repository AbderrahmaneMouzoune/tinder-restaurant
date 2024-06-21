// import { useState, useEffect } from 'react'

import SocketIoClient from '@/lib/socket-client'
import { useRef, useState } from 'react'

// type SocketRoomUtilities = {
//   createRoom(room: Room): Room | null
//   getRoom(roomId: RoomId): Room | null
//   addOneParticipantToRoom(participant: Profile, roomId: RoomId): Profile | null
// }

// function useSocketRoom(): SocketRoomUtilities {
//   return {
//     getRoom: useGetRoomInfo,
//     addOneParticipantToRoom: useAddParticipantToRoom,
//   }
// }

// function useGetRoomInfo(roomId: RoomId): Room | null {
//   const [room, setRoom] = useState<Room | null>(null)

//   const clientSocket = useSocketIoClient()

//   useEffect(() => {
//     if (!clientSocket) return

//     const receiveRoomHandler = (receivedRoom: Room) => {
//       setRoom(receivedRoom)
//     }
//     clientSocket.send('room.get', roomId)

//     clientSocket.subscribe('room.get.success', receiveRoomHandler)

//     return () => {
//       clientSocket.off('room.get.success', receiveRoomHandler)
//     }
//   }, [clientSocket, roomId])

//   return room
// }

// function useAddParticipantToRoom(
//   participant: Profile,
//   roomId: RoomId
// ): Profile | null {
//   const [lastParticipant, setLastParticipant] = useState<Profile | null>(null)

//   const clientSocket = useSocketIoClient()

//   useEffect(() => {
//     if (!clientSocket) return

//     const receiveRoomHandler = (receivedParticipant: Profile) => {
//       setLastParticipant(receivedParticipant)
//     }

//     clientSocket.send('room.join', participant, roomId)

//     clientSocket.subscribe('room.join.success', receiveRoomHandler)

//     return () => {
//       clientSocket.off('room.join.success', receiveRoomHandler)
//     }
//   }, [clientSocket, participant, roomId])

//   return lastParticipant
// }

// export default useSocketRoom

type SocketClientCreate = {
  client: SocketIoClient | null
  connected: boolean
}

function useSocketClientCreate(): SocketClientCreate {
  const clientRef = useRef<SocketIoClient | null>(null)
  const [connected, setConnected] = useState<boolean>(false)

  if (typeof window === 'undefined') throw new Error('No window defined')

  const url = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000'
  const config = {
    url,
    token: '',
  }

  if (!clientRef.current) {
    clientRef.current = new SocketIoClient(config)
    clientRef.current.on('connect', () => {
      setConnected(true)
      console.log('Socket.io client connected')
    })

    clientRef.current.on('disconnect', () => {
      setConnected(false)
      console.log('Socket.io client disconnected')
    })
  }

  return { client: clientRef.current, connected } // Return the existing instance if it exists
}

export default useSocketClientCreate
