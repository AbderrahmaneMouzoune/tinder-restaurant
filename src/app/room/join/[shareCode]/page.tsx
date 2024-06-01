import CreateParticipant from '@/app/shared/participant/create-participant'

export default async function PageRoot({
  params,
}: {
  params: {
    shareCode: string
  }
}) {
  return <CreateParticipant roomCode={params.shareCode} />
}
