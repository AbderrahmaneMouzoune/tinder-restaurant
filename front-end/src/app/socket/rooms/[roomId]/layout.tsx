'use client'
import { ProvideSocketIoClient } from '@/utils/context/SocketIoProvider'
import React from 'react'

export default function SocketRoomsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ProvideSocketIoClient roomId={'lalala'}>{children}</ProvideSocketIoClient>
  )
}
