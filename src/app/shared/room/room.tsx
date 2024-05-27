import { Card, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'

export default function Room({ id, hostName }: Room) {
  return (
    <>
      <h1>Room of {hostName}</h1>
      <section className="grid grid-cols-2 px-2 gap-2">
        {Array.from({ length: 6 })
          .fill(null)
          .map((_, i) => (
            <Participant
              key={`participant-${i}`}
              name={`participant-${i}`}
              avatar={'https://placehold.co/600x400'}
            />
          ))}
      </section>
    </>
  )
}

function Participant({ name, avatar }: Participant) {
  return (
    <Card>
      <CardContent className="w-full">
        <figure className="w-full h-[150px]">
          <Image
            src={avatar}
            alt={`Avatar de ${name}`}
            fill
            width={0}
            height={0}
          />
        </figure>
      </CardContent>
      <CardFooter>{name}</CardFooter>
    </Card>
  )
}
