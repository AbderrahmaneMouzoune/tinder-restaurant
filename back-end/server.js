import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'

const app = express()
const server = createServer(app)
const PORT = process.env.PORT || 5000

const io = new Server(server, {
  cors: {
    // TODO: update cors.
    origin: '*',
  },
})

io.on('connection', (socket) => {
  console.log('someone connect')

  socket.on('join-room', (roomId) => {
    console.log(`Room ${roomId} joined`)
  })
})

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`)
})
