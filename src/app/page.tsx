'use client'
import RestaurantSlider from '@/app/shared/restaurant/restaurant-slider'
import { useRestaurantLiked } from '@/lib/context/RestaurantsLikedContext'
import { MOCKUP } from '@/mockup-data/restaurant'
import Generator from '@/app/shared/generator'
import Resume from '@/app/shared/resume'
import { useState } from 'react'
import { useGeoLocation } from '@/lib/context/GeoLocationContext'

export default function Home() {
  const { location } = useGeoLocation()
  return (
    <main className="min-h-screen p-5">
      <h1 className="text-center text-2xl font-bold">Tinder restaurant</h1>
      {location && (
        <h2 className="text-center text-sm">
          Pour la zone géographique : longitude : {location.longitude}, latitude
          : {location.latitude}
        </h2>
      )}
      <Generator />
      {/* <RestaurantSlider restaurants={MOCKUP.restaurants} /> */}
      <Resume />
    </main>
  )
}
