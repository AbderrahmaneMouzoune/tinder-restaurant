'use client'
import Generator from '@/app/(shared)/generator'
import TinderUi from '@/app/(shared)/tinderui'
import { useGeoLocation } from '@/utils/context/GeoLocationContext'

export default function Core() {
  const { location } = useGeoLocation()
  const isLocationValid = (location: TLocation) => {
    return location.latitude && location.longitude
  }
  // if (isLocationValid(location)) {
  //   return <TinderUi />
  // }

  if (isLocationValid(location)) {
    return (
      <h2 className="text-xl text-center">
        Commencer la room pour {location.latitude} / {location.longitude}
      </h2>
    )
  }

  return <Generator />
}
