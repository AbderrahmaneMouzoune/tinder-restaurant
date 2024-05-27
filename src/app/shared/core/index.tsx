'use client'
import { useGeoLocation } from '@/utils/context/GeoLocationContext'
import React from 'react'
import TinderUi from '@/app/shared/tinderui'
import Generator from '@/app/shared/generator'

export default function Core() {
  const { location } = useGeoLocation()
  const isLocationValid = (location: TLocation) => {
    return location.latitude && location.longitude
  }

  if (isLocationValid(location)) {
    return <TinderUi />
  }

  return (
    <section>
      <h1 className="text-center text-2xl font-bold">Tinder restaurant</h1>
      <Generator />
    </section>
  )
}
