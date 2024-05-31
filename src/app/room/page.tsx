import { getRooms } from '@/actions/roomAction'

export default async function Page() {
  const rooms = await getRooms()

  return (
    <section>
      <h1>Fetched {rooms.length}</h1>

      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            {room.hostName} - {room.shareCode}
          </li>
        ))}
      </ul>
    </section>
  )
}
