import express from 'express'
import { createServer } from 'node:http'
import { Server, Socket } from 'socket.io'
import { onCreateRoom } from './events/room'

const app = express()
const server = createServer(app)
const PORT = process.env.PORT || 5000

const io = new Server(server, {
  cors: {
    // TODO: update cors.
    origin: '*',
  },
})

export const ALL_ROOMS: Record<string, Room> = {}

io.on('connection', (socket: Socket) => {
  console.log('someone connect')

  socket.on('create-room', (room: Room) => {
    onCreateRoom(socket, room)
  })
})

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`)
})
