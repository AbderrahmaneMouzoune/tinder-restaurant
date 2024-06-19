'use client'

import { Button } from '@/components/ui/button'
import useSocketRoom from '@/utils/hook/useSocketRoom'

type PageProps = {
  params: {
    roomId: RoomId
  }
}

export default function Page({ params }: PageProps) {
  const { getRoom, addOneParticipantToRoom } = useSocketRoom()
  const room = getRoom(params.roomId)

  if (room === null) {
    return <h1>Sadly no room look like : {params.roomId} </h1>
  }

  // const onParticpantJoin = () => {
  //   addOneParticipantToRoom(
  //     {
  //       username: 'Abd',
  //     },
  //     room.id
  //   )
  // }

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

      <Button
        onClick={() =>
          addOneParticipantToRoom(
            {
              username: 'Abd',
            },
            room.id
          )
        }
      >
        Faire rejoindre Abd
      </Button>
    </div>
  )
}
