'use client'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { micah } from '@dicebear/collection'
import { createAvatar } from '@dicebear/core'
import Image from 'next/image'

const possibleAvatar = [
  'Princess',
  'Abby',
  'Boo',
  'Loki',
  'Coco',
  'Cleo',
  'Buddy',
]

export default function CreateProfile() {
  const avatarName =
    possibleAvatar[(Math.random() * 100) % possibleAvatar.length]
  const avatar = createAvatar(micah, {
    seed: avatarName,
  })

  return (
    <Card>
      <CardHeader>
        <figure className="size-44 mx-auto">
          <Image
            src={avatar.toDataUri()}
            alt={`Avatar of ${avatarName}`}
            width={256}
            height={256}
          />
        </figure>
      </CardHeader>

      <CardContent>
        <FormItem>
          <Input placeholder={'CoolRat'} />
        </FormItem>
      </CardContent>
    </Card>
  )
}
