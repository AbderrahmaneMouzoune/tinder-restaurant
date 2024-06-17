import Room from '@/app/shared/room/room'
import { getRoom } from '@/lib/services/room/get-room'

type PageProps = {
  params: {
    roomId: RoomId
  }
}

export default async function PageRoot({ params }: PageProps) {
  const room = await getRoom(params.roomId)
  return <Room {...room} />
}
