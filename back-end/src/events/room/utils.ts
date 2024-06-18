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
    success: 'room.join.success',
    failed: 'room.join.failed',
  },
  get: {
    event: 'room.get',
    success: 'room.get.success',
    failed: 'room.get.failed',
  },
}

function findRoomIndexById(roomId: RoomId) {
  return ALL_ROOMS.findIndex((room) => room.id === roomId)
}

function withRoom(roomId: RoomId, callback: (room: Room) => void): boolean {
  const room = getRoomById(roomId)
  if (!room) return false
  callback(room)
  return true
}

export function getRoomById(roomId: RoomId): Room | null {
  const index = findRoomIndexById(roomId)
  return index === -1 ? null : ALL_ROOMS[index]
}

export function getAllRoom() {
  return ALL_ROOMS
}

export function addOneRoom(room: Room) {
  return ALL_ROOMS.push(room)
}

export function deleteOneRoom(roomId: RoomId): boolean {
  return withRoom(roomId, (room) => {
    const index = ALL_ROOMS.indexOf(room)
    ALL_ROOMS.splice(index, 1)
  })
}

export function updateOneRoom(updatedRoom: Room): boolean {
  return withRoom(updatedRoom.id, (room) => {
    Object.assign(room, updatedRoom)
  })
}

export function addOneParticipantToRoom(
  participant: Profile,
  roomId: RoomId
): boolean {
  return withRoom(roomId, (room) => {
    room.participants.push(participant)
  })
}
