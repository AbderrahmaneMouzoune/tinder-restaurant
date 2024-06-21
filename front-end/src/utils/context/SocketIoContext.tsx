import React, { createContext, useContext, useEffect, useState } from 'react'
import SocketIoClient from '@/lib/socket-client'
import useSocketClientCreate from '../hook/useSocketClientCreate'

interface SocketIoContextProps {
  socketIoClient: SocketIoClient | null
  connected: boolean
}

const socketIoContext = createContext<SocketIoContextProps | undefined>(
  undefined
)

const SocketIoClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const socketIo = useSocketClientCreate()
  const client = socketIo.client

  useEffect(() => {
    // if (!client) return
    // client.onRoomGetInfo('lalala')
    // client.send('room.get', roomId)
    // client.subscribe('room.get.success', receiveRoomHandler)
    // return () => {
    //   client.off('room.get.success', receiveRoomHandler)
    // }
  }, [client])

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

const useSocketIoClient = () => {
  const context = useContext(socketIoContext)
  if (context === undefined) {
    throw new Error(
      'useSocketIoClient must be used within a SocketIoClientProvider'
    )
  }
  return context
}

export { SocketIoClientProvider, useSocketIoClient }
