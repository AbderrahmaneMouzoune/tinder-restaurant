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
import { zodResolver } from '@hookform/resolvers/zod'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const formSchema = z.object({
  username: z.string().min(2).max(100),
})

export default function CreateRoom() {
  const [roomId, setRoomId] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch('/api/room', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ hostName: values.username }),
    })
      .then((response) => {
        if (!response.ok)
          throw new Error('Une erreur est survenue à la création de la room')
        return response.json()
      })
      .then((room: Room) => {
        toast.success(`Create room ${room.id} by ${room.hostName}`)
        setRoomId(room.id)
      })
      .catch((error) => {
        return toast.error(
          `Une erreur est survenu à la création de la room ${error}`
        )
      })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Créer une room</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pseudo</FormLabel>
                  <FormControl>
                    <Input placeholder="Entrer un pseudo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Créer ma room
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
