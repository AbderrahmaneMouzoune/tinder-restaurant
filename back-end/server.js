import express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'

const app = express()
const server = createServer(app)

const io = new Server(server, {
  cors: {
    // TODO: update cors.
    origin: '*',
  },
})

io.on('connection', (socket) => {
  console.log('someone connect')
})

server.listen(3000, () => {
  console.log('server running at http://localhost:3000')
})
