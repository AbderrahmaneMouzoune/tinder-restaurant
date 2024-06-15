import { ALL_ROOMS } from '@/server'

export const roomEvent = {
  exist: 'room.exist',
  dontExist: 'room.dont.exist',
  create: {
    event: 'room.create',
    success: 'room.create.success',
    failed: 'room.create.failed',
  },
  participant: {
    create: {
      success: 'room.participant.created',
      failed: 'room.participant.failed',
    },
  },
  join: {
    event: 'room.join',
  },
}

export function roomExist(roomId: RoomId): boolean {
  return Boolean(ALL_ROOMS[roomId])
}

export function addRoom(room: Room): boolean {
  ALL_ROOMS[room.id] = room
  return roomExist(room.id)
}

export function addParticipantToRoom(
  roomId: RoomId,
  participant: Profile
): boolean {
  const previousRoom: Room = ALL_ROOMS[roomId]

  ALL_ROOMS[roomId] = {
    ...previousRoom,
    participants: [...previousRoom.participants, participant],
  }

  return ALL_ROOMS[roomId].participants.some(
    (p) => p.username === participant.username
  )
}
