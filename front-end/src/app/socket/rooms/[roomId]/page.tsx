'use client'
import useGetRoomInfo from '@/utils/hook/useGetRoomInfo'

type PageProps = {
  params: {
    roomId: RoomId
  }
}

export default function Page({ params }: PageProps) {
  const { room } = useGetRoomInfo(params.roomId)

  if (room === null) {
    return <h1>Sadly no room look like : {params.roomId}</h1>
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
