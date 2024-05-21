'use client'
import RestaurantSlider from '@/app/shared/restaurant/restaurant-slider'
import { MOCKUP } from '@/mockup-data/restaurant'

export default function Home({}) {
  return (
    <main className="max-h-screen min-h-screen p-5">
      <RestaurantSlider restaurants={MOCKUP.restaurants} />
    </main>
  )
}
