import Room from '@/app/shared/room/room'
import { getRoom } from '@/lib/services/room/get-room'

export default async function PageRoot({
  params,
}: {
  params: {
    roomId: string
  }
}) {
  const room = await getRoom(params.roomId)
  return <Room {...room} />
}
