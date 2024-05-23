'use client'
import Generator from '@/app/shared/generator'
import Resume from '@/app/shared/resume'
import { useGeoLocation } from '@/lib/context/GeoLocationContext'

export default function Home() {
  const { location } = useGeoLocation()
  const isLocationValid = (location: {
    latitude: number | null
    longitude: number | null
  }) => {
    return location.latitude && location.longitude
  }

  return (
    <main className="min-h-screen p-5">
      <h1 className="text-center text-2xl font-bold">Tinder restaurant</h1>
      {isLocationValid(location) && (
        <h2 className="text-center text-sm">
          Pour la zone géographique : longitude : {location.longitude}, latitude
          : {location.latitude}
        </h2>
      )}
      {!isLocationValid(location) && <Generator />}
      {/* <RestaurantSlider restaurants={MOCKUP.restaurants} /> */}
      <Resume />
    </main>
  )
}
