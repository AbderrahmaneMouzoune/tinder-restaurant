import SocketIoClient from '@/lib/socket-client'
import React, { createContext, useRef, useState } from 'react'
interface SocketIoContextValue {
  socketIoClient: SocketIoClient | null
  connected: boolean
}
export const socketIoContext = createContext<SocketIoContextValue>({
  socketIoClient: null,
  connected: false,
})

interface Props {
  roomId: RoomId
  children: React.ReactNode
}

export function ProvideSocketIoClient({ roomId, children }: Props) {
  const socketIo = useProvideSocketIoClient(roomId)

  return (
    <socketIoContext.Provider
      value={{
        socketIoClient: socketIo?.client || null,
        connected: socketIo?.connected || false,
      }}
    >
      {children}
    </socketIoContext.Provider>
  )
}
function useProvideSocketIoClient(roomId: RoomId) {
  const clientRef = useRef<SocketIoClient | null>(null)
  const [connected, setConnected] = useState<boolean>(false)

  if (typeof window === 'undefined') return

  const url = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5000'
  const config = {
    url,
    token: '',
  }

  if (!clientRef.current) {
    clientRef.current = new SocketIoClient(config)
    clientRef.current.on('connect', () => {
      setConnected(true)
      console.log('Socket.io client connected')
    })
    clientRef.current.on('disconnect', () => {
      setConnected(false)
      console.log('Socket.io client disconnected')
    })
  }
  return { client: clientRef.current, connected } // Return the existing instance if it exists
}
