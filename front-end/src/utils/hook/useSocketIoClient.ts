import { useContext } from 'react'
import { socketIoContext } from '../context/SocketIoProvider'

export function useSocketIoClient() {
  const context = useContext(socketIoContext)
  if (context.socketIoClient === null && typeof window !== 'undefined') {
    throw new Error(
      'useSocketIoClient must be used within a ProvideSocketIoClient'
    )
  }
  return context.socketIoClient
}

export function useIsSocketConnected(): boolean {
  const context = useContext(socketIoContext)
  if (context.socketIoClient === null && typeof window !== 'undefined') {
    throw new Error(
      'useSocketIoClient must be used within a ProvideSocketIoClient'
    )
  }
  return context.connected
}
