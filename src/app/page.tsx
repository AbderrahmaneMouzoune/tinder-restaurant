'use client'
import RestaurantSlider from '@/app/shared/restaurant/restaurant-slider'
import { useRestaurantLiked } from '@/lib/restaurants-liked'
import { MOCKUP } from '@/mockup-data/restaurant'
import Generator from '@/app/shared/generator'
import Resume from '@/app/shared/resume'

export default function Home() {
  return (
    <main className="max-h-screen min-h-screen p-5">
      <h1 className="text-center text-2xl font-bold">Tinder restaurant</h1>
      <Generator />
      {/* <RestaurantSlider restaurants={MOCKUP.restaurants} /> */}
      <Resume />
    </main>
  )
}
