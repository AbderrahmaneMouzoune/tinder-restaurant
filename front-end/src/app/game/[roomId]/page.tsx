'use client'
import TinderUi from '@/app/(shared)/tinderui'
import { MOCKUP } from '@/mockup-data/restaurant'

type PageProps = {
  params: {
    roomId: RoomId
  }
}

export default function PageRoot({ params }: PageProps) {
  return <TinderUi restaurants={MOCKUP.restaurants} />
}
