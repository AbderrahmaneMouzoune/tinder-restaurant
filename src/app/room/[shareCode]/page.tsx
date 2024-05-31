import Room from '@/app/shared/room/room'
import { getRoomByShareCode } from '@/lib/services/room'
import { notFound } from 'next/navigation'

export default async function PageRoot({
  params,
}: {
  params: {
    shareCode: string
  }
}) {
  const room = await getRoomByShareCode(params.shareCode)
  if (room === null) return notFound()
  return <Room {...room} />
}
