'use client'
import RestaurantCard from '@/app/shared/restaurant/card'
import { useRestaurantLiked } from '@/lib/restaurants-liked'
import { MOCKUP } from '@/mockup-data/restaurant'
import { Restaurant } from '@/types/restaurant'
import { useState } from 'react'

type Props = {
  restaurants: Restaurant[]
}

export default function Home({}: Props) {
  const { likeRestaurant, dislikeRestaurant } = useRestaurantLiked()
  const [currentRestaurant, setCurrentRestaurant] = useState<number | null>(0)

  // TODO : Transform that into props
  const restaurants = MOCKUP.restaurants

  const currentRestaurantInformation: Restaurant | null =
    currentRestaurant === null ? null : restaurants[currentRestaurant]

  const goToNextRestaurant = (liked: boolean): void => {
    if (currentRestaurant === null || currentRestaurantInformation === null) {
      return
    }

    const callBack = liked ? likeRestaurant : dislikeRestaurant
    callBack(currentRestaurantInformation)

    setCurrentRestaurant((prevRestaurantId) => {
      if (prevRestaurantId === null) {
        return null
      }

      if (prevRestaurantId + 1 === restaurants.length) {
        return null
      }

      return prevRestaurantId + 1
    })
  }

  return (
    <main className="max-h-screen min-h-screen p-5">
      <section className="overflow-x-scroll h-full w-full min-h-screen">
        {currentRestaurantInformation && (
          <RestaurantCard
            {...currentRestaurantInformation}
            goNextRestaurant={goToNextRestaurant}
          />
        )}
        {!currentRestaurantInformation && (
          <h1>Sorry no more restaurant to rate...</h1>
        )}
      </section>
    </main>
  )
}
