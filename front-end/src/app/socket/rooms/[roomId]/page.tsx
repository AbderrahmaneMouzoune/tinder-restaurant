'use client'

import { Button } from '@/components/ui/button'
import useGetRoomInfo from '@/utils/hook/useGetRoomInfo'
import {
  useIsSocketConnected,
  useSocketIoClient,
} from '@/utils/hook/useSocketIoClient'
import { useState, useEffect } from 'react'

type PageProps = {
  params: {
    roomId: RoomId
  }
}

export default function Page({ params }: PageProps) {
  const [room, setRoom] = useState<Room | null>(null)

  const clientSocket = useSocketIoClient()

  useEffect(() => {
    if (!clientSocket) return

    const receiveRoomHandler = (receivedRoom: Room) => {
      console.log('received something', receivedRoom)
      setRoom(structuredClone(receivedRoom))
    }
    clientSocket.send('room.get', params.roomId)

    clientSocket.subscribe('room.get.success', receiveRoomHandler)
  }, [clientSocket, params.roomId])

  if (room === null) {
    return <h1>Sadly no room look like : {params.roomId} </h1>
  }

  return (
    <div>
      <h1>
        Room : {room.id} created by {room.host?.username}
      </h1>

      <h2>Il y a {room.participants.length} participants</h2>

      {room.participants.length > 0 && (
        <ul>
          {room.participants.map((participant, id) => (
            <li key={id}>{participant?.username}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
