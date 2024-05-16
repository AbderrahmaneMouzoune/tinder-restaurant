'use client'
import RestaurantCard from '@/app/shared/restaurant/card'
import { MOCKUP } from '@/mockup-data/restaurant'
import { Restaurant } from '@/types/restaurant'
import { useState } from 'react'

export default function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(
    MOCKUP.restaurants
  )

  return (
    <main className="max-h-screen min-h-screen">
      <section className="grid grid-cols-1 gap-5 p-4 md:p-6">
        {restaurants.map((restaurant, i) => (
          <RestaurantCard
            key={i}
            {...restaurant}
          />
        ))}
      </section>
    </main>
  )
}
