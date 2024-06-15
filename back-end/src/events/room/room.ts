import { Socket } from 'socket.io'
import { ALL_ROOMS } from '@/server'
import { addParticipantToRoom, addRoom, roomEvent, roomExist } from './utils'
import { events } from '..'

export function onRoomCreate(socket: Socket, room: Room) {
  console.log(`User (${room.host.username}) wants to create Room ${room.id}`)

  if (roomExist(room.id)) {
    return socket.emit(events.room.exist, `Room ${room.id} already exists`)
  }

  if (addRoom(room)) {
    return socket.emit(events.room.create.success, ALL_ROOMS[room.id])
  }
}

export function onRoomJoin(socket: Socket, roomId: RoomId, user: Profile) {
  console.log(`${user.username} want to join ${roomId}`)

  if (!roomExist(roomId)) {
    return socket.emit(events.room.dontExist, roomId)
  }

  const isParticipantJoined = addParticipantToRoom(roomId, user)
    ? events.room.participant.create.success
    : events.room.participant.create.failed

  return socket.broadcast.to('socket.room').emit(isParticipantJoined)
}
