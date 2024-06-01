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
import { createParticipant } from '@/lib/services/participant'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export const createParticipantSchema = z.object({
  username: z.string().min(2).max(100),
})

export default function CreateParticipant({ roomCode }: { roomCode: string }) {
  const form = useForm<z.infer<typeof createParticipantSchema>>({
    resolver: zodResolver(createParticipantSchema),
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rejoindre la room {roomCode}</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((participant) =>
              createParticipant(participant, roomCode),
            )}
            className="space-y-2"
          >
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
              Rejoindre la room
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
