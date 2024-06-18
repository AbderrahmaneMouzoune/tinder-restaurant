import { Socket } from 'socket.io'
import { events } from '..'
import {
  addOneRoom,
  addOneParticipantToRoom,
  getAllRoom,
  getRoomById,
} from './utils'

export function onRoomCreate(socket: Socket, room: Room) {
  console.log(
    `<- [${events.room.create.event}] - User (${room.host.username}) wants to create Room ${room.id}`
  )

  if (getRoomById(room.id)) {
    return socket.emit(events.room.exist, `Room ${room.id} already exists`)
  }

  if (addOneRoom(room)) {
    console.log(
      `-> [${events.room.create.success}] - User (${room.host.username}) created ${room.id}`
    )

    return socket.broadcast.emit(
      events.room.create.success,
      getRoomById(room.id),
      getAllRoom()
    )
  }
}

export function onRoomJoin(socket: Socket, roomId: RoomId, user: Profile) {
  console.log(
    `<- [${events.room.join.event}] - ${user.username} want to join ${roomId}`
  )

  if (!getRoomById(roomId)) {
    return socket.emit(events.room.dontExist, roomId)
  }

  const isParticipantJoined = addOneParticipantToRoom(user, roomId)
    ? events.room.participant.create.success
    : events.room.participant.create.failed

  const room = getRoomById(roomId)

  console.log(`-> [${isParticipantJoined}] - isparticipant joined`)
  return socket.broadcast.emit(
    isParticipantJoined,
    room?.participants[room.participants.length - 1]
  )
}

export function onRoomListing(socket: Socket, roomId?: RoomId) {
  console.log(
    `<- [${events.room.get.event}] - Someone want to retrieve ${roomId}`
  )

  if (!roomId) {
    console.log(
      `-> [${
        events.room.get.success
      }] - RoomId (${roomId}) don't exist so we return all rooms (${
        getAllRoom().length
      })`
    )
    return socket.emit(events.room.get.success, getAllRoom())
  }

  const room = getRoomById(roomId)

  if (roomId && !room) {
    console.log(
      `-> [${events.room.get.failed}] - Sadly no room ${roomId} exist`
    )
    return socket.emit(events.room.get.failed, `Room ${roomId} does not exist`)
  }

  if (roomId && room) {
    console.log(
      `-> [${events.room.get.success}] - Successfully found ${room.id} created by ${room.host.username}`
    )
    return socket.emit(events.room.get.success, room)
  }
}
