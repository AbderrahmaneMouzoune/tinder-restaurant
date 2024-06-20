import { Button } from '@/components/ui/button'
import { TrackPreviousIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

export default function RoomLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="p-5 space-y-5">
      <Button asChild>
        <Link href="/">
          <TrackPreviousIcon className="size-4 mr-2" />
          Go back
        </Link>
      </Button>
      {children}
    </main>
  )
}
