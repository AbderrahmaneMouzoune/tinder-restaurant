import { useRestaurantLiked } from '@/lib/restaurants-liked'
import { Restaurant } from '@/types/restaurant'
import React, { useState } from 'react'
import RestaurantCard from '@/app/shared/restaurant/card'

type Props = {
  restaurants: Restaurant[]
}

export default function RestaurantSlider({ restaurants }: Props) {
  const { likeRestaurant, dislikeRestaurant } = useRestaurantLiked()
  const [currentRestaurant, setCurrentRestaurant] = useState<number | null>(0)

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

  if (currentRestaurant === null) {
    return <h1>Sorry no more restaurant to rate...</h1>
  }

  return (
    <section className="overflow-x-scroll h-full w-full min-h-screen">
      {currentRestaurantInformation && (
        <RestaurantCard
          {...currentRestaurantInformation}
          goNextRestaurant={goToNextRestaurant}
        />
      )}
    </section>
  )
}
