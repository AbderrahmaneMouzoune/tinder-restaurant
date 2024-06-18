import Room from '@/app/(shared)/room/room'

type PageProps = {
  params: {
    roomId: RoomId
  }
}

export default async function PageRoot({ params }: PageProps) {
  return (
    <Room
      id={params.roomId}
      host={{
        username: 'abd',
      }}
      restaurants={[]}
      participants={[]}
    />
  )
}
