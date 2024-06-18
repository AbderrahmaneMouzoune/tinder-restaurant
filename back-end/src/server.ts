import express from 'express'
import { createServer } from 'node:http'
import { Server, Socket } from 'socket.io'
import { onRoomCreate, onRoomJoin, onRoomListing } from '@/events/room/room'
import { events } from './events'

const app = express()
const server = createServer(app)
const PORT = process.env.PORT || 5000

const io = new Server(server, {
  cors: {
    // TODO: update cors.
    origin: '*',
  },
})

app.use(express.json())

export const ALL_ROOMS: Room[] = [
  {
    id: 'lalala',
    host: {
      username: 'Terminator',
    },
    restaurants: [],
    participants: [],
  },
]

io.on('connection', (socket: Socket) => {
  console.log(`Someone logged in: ${socket.id}`)

  socket.on(events.room.create.event, (room: Room) => {
    onRoomCreate(socket, room)
  })

  socket.on(events.room.join.event, (roomId: RoomId, person: Profile) => {
    onRoomJoin(socket, roomId, person)
  })

  socket.on(events.room.get.event, (roomId?: RoomId) => {
    onRoomListing(socket, roomId)
  })

  socket.on('disconnect', () => {
    console.log(`Someone disconnected: ${socket.id}`)
  })
})

server.listen(PORT, () => {
  console.log(
    `server running at http://localhost:${PORT} with ${ALL_ROOMS.length} room`
  )
})
