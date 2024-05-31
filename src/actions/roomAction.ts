import { db } from '@/db'
import { RoomsTable } from '@/db/schema'

export async function getRooms() {
  const response = await db.select().from(RoomsTable)
  console.log(response)
  return response
}
