import { Button } from '@/components/ui/button'
import CreateProfile from '../profile/create-profile'

type JoinRoomProps = {
  host: Profile
  participantsNumber: number
}

export default function JoinRoom({ host, participantsNumber }: JoinRoomProps) {
  return (
    <section>
      <h1 className="text-center text-2xl font-semibold">
        Rejoigner la partie de{' '}
        <span className="text-accent-foreground">{host.username}</span>
      </h1>

      <CreateProfile />

      <div className="w-full mt-2">
        <Button className="w-full">
          Rejoindre {host.username}{' '}
          {participantsNumber > 0 && `et ${participantsNumber} personnes`}
        </Button>
      </div>
    </section>
  )
}
