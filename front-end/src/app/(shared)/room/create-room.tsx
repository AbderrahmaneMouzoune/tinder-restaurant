'use client'
import { Button } from '@/components/ui/button'
import { useProfile } from '@/utils/context/ProfileContext'
import { useRestaurants } from '@/utils/context/RestaurantsContext'
import useRooms from '@/utils/hook/useRooms'
import { PlayIcon } from '@radix-ui/react-icons'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/navigation'

export default function CreateRoom() {
  const { restaurants } = useRestaurants()
  const { profile } = useProfile()
  const router = useRouter()
  const { createRoom } = useRooms()

  const onCreateRoom = () => {
    const roomId = nanoid(10)
    const newRoom: Room = {
      id: roomId,
      host: profile,
      restaurants: restaurants,
      participants: [],
    }
    if (createRoom(newRoom)) router.push(`/room/${roomId}`)
  }

  return (
    <Button className="w-full" onClick={onCreateRoom}>
      <PlayIcon className="size-4 mr-2" /> Créer ma room
    </Button>
  )
}
