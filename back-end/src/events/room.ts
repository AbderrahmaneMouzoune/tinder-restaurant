import { Socket } from 'socket.io'
import { ALL_ROOMS } from '../server'

// TODO: Find a way to tell to front how it work
export default function onCreateRoom(socket: Socket, room: Room) {
  console.log(`User (${room.host.username}) wants to create Room ${room.id}`)

  // Vérifier si la room existe déjà
  if (ALL_ROOMS[room.id]) {
    return socket.emit('room-exists', `Room ${room.id} already exists`)
  }

  // Création d'une nouvelle room avec des détails initiaux
  ALL_ROOMS[room.id] = room

  // Informer le créateur de la room que la room a été créée
  socket.emit('room-created', ALL_ROOMS[room.id])
}
