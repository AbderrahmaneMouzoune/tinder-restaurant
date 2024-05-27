import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function CreateRoom() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Créer une room</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Input placeholder="mon super pseudo" />
        <Button className="w-full">Créer ma room</Button>
      </CardContent>
    </Card>
  )
}
