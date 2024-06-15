import { createServer } from 'node:http'
import { Server as IOServer, Socket } from 'socket.io'
import { io as ioc, Socket as ClientSocket } from 'socket.io-client'
import onCreateRoom from '../events/room/room'
import { ALL_ROOMS } from '../server'

// TODO: Make those test work
function waitFor(socket: Socket, event: string) {
  return new Promise((resolve) => {
    socket.once(event, resolve)
  })
}

describe('Socket.IO Server', () => {
  let io: IOServer, serverSocket: Socket, clientSocket: ClientSocket
  const PORT = 5000

  beforeAll((done) => {
    const httpServer = createServer()
    io = new IOServer(httpServer, {
      cors: {
        origin: '*',
      },
    })

    io.on('connection', (socket: Socket) => {
      serverSocket = socket
      socket.on('create-room', (room: any) => {
        onCreateRoom(socket, room)
      })
    })

    httpServer.listen(PORT, () => {
      clientSocket = ioc(`http://localhost:${PORT}`)
      clientSocket.on('connect', done)
    })
  })

  afterAll(() => {
    io.close()
    clientSocket.disconnect()
  })

  test('should create a room successfully', (done) => {
    const room = {
      id: 'test-room',
      host: { username: 'test-host' },
      restaurants: [],
      participants: [],
    }

    clientSocket.emit('create-room', room)
    clientSocket.on('room-created', (roomId, createdRoom) => {
      expect(roomId).toBe('test-room')
      expect(createdRoom).toEqual(room)
      expect(ALL_ROOMS['test-room']).toEqual(room)
      done()
    })
  })

  test('should not create a room if it already exists', (done) => {
    const room = {
      id: 'test-room',
      host: { username: 'test-host' },
      restaurants: [],
      participants: [],
    }

    ALL_ROOMS['test-room'] = room

    clientSocket.emit('create-room', room)
    clientSocket.on('room-exists', (message) => {
      expect(message).toBe('Room test-room already exists')
      done()
    })
  })
})
