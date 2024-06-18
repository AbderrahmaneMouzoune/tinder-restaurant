'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { createRoom } from '@/lib/services/room/create-room'
import { zodResolver } from '@hookform/resolvers/zod'
import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { socket } from '@/socket'
import { createAvatar } from '@dicebear/core'
import { micah } from '@dicebear/collection'
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

export const createRoomSchema = z.object({
  username: z.string().min(2).max(100),
})

export default function CreateRoom() {
  const form = useForm<z.infer<typeof createRoomSchema>>({
    resolver: zodResolver(createRoomSchema),
  })

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
        <Form {...form}>
          <form
            // onSubmit={form.handleSubmit((room) => onCreateRoom(room))}
            className="space-y-2"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={'CoolRat'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <Button type="submit" className="w-full">
              Créer ma room
            </Button> */}
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
