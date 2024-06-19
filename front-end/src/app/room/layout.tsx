import React from 'react'

export default function RoomLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="p-5 space-y-5">{children}</main>
}
