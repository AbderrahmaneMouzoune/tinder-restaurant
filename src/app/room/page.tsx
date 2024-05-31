import { db } from '@/db'
import { RoomsTable } from '@/db/schema'
import React from 'react'

export default async function Page() {
  let rooms
  let startTime = Date.now()

  try {
    rooms = await db.select().from(RoomsTable)
  } catch (e: any) {
    if (e.message === `relation "room" does not exist`) {
      console.log(
        `Table does not exist, creating and seeding it with dummy data now...`
      )

      startTime = Date.now()
      rooms = await db.select().from(RoomsTable)
    } else {
      throw e
    }
  }

  const duration = Date.now() - startTime
  return (
    <section>
      <h1>
        Fetched {rooms.length} in {duration.toLocaleString()}
      </h1>

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
