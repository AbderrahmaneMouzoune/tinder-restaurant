'use client'
import Generator from '@/app/shared/generator'
import TinderUi from '@/app/shared/tinderui'
import { useGeoLocation } from '@/utils/context/GeoLocationContext'

export default function Home() {
  const { location } = useGeoLocation()
  const isLocationValid = (location: TLocation) => {
    return location.latitude && location.longitude
  }

  if (isLocationValid(location)) {
    return <TinderUi />
  }

  return (
    <main className="min-h-screen p-5">
      <h1 className="text-center text-2xl font-bold">Tinder restaurant</h1>
      <Generator />
    </main>
  )
}
