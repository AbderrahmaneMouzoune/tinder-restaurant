import { nanoid } from 'nanoid'

export async function getRoom(roomId: string): Promise<Room> {
  // TODO: really return room

  return {
    id: roomId,
    host: {
      username: 'skulbraz',
    },
    restaurants: [],
    participants: [],
  }
}
