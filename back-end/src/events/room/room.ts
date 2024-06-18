import { Socket } from 'socket.io'
import { events } from '..'
import {
  addOneRoom,
  addOneParticipantToRoom,
  getAllRoom,
  getRoomById,
} from './utils'

export function onRoomCreate(socket: Socket, room: Room) {
  console.log(`User (${room.host.username}) wants to create Room ${room.id}`)

  if (getRoomById(room.id)) {
    return socket.emit(events.room.exist, `Room ${room.id} already exists`)
  }

  if (addOneRoom(room)) {
    console.log(`User (${room.host.username}) created ${room.id}`)

    return socket.broadcast.emit(
      events.room.create.success,
      getRoomById(room.id),
      getAllRoom()
    )
  }
}

export function onRoomJoin(socket: Socket, roomId: RoomId, user: Profile) {
  console.log(`${user.username} want to join ${roomId}`)

  if (!getRoomById(roomId)) {
    return socket.emit(events.room.dontExist, roomId)
  }

  const isParticipantJoined = addOneParticipantToRoom(user, roomId)
    ? events.room.participant.create.success
    : events.room.participant.create.failed

  return socket.broadcast.to('socket.room').emit(isParticipantJoined)
}

export function onRoomListing(socket: Socket, roomId?: RoomId) {
  console.log(`Someone want to retrieve ${roomId}`)

  if (!roomId) {
    return socket.broadcast.emit(events.room.get.success, getAllRoom())
  }

  const room = getRoomById(roomId)

  if (roomId && !room) {
    return socket.emit(events.room.get.failed, `Room ${roomId} does not exist`)
  }

  if (roomId && room) {
    return socket.broadcast.emit(events.room.get.success, room)
  }
}
