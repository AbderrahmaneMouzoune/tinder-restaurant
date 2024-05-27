'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function ListRoom() {
  const {
    isPending,
    error,
    data: rooms,
  } = useQuery({
    queryKey: ['getRooms'],
    queryFn: () => fetch(`/api/room`).then((res) => res.json()),
  })

  if (isPending) {
    return <h1>Currently fetch all rooms...</h1>
  }

  if (error) {
    return (
      <h1>Une erreur est survenu sur la récupération de toutes les rooms</h1>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>La liste de toutes les rooms existantes</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-decimal pl-5">
          {rooms?.map((room: Room) => (
            <li key={room.id}>
              [{room.id}] - Created by {room.hostName}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
