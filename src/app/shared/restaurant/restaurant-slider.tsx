import RestaurantCard from '@/app/shared/restaurant/card'
import { useRestaurantLiked } from '@/utils/context/RestaurantsLikedContext'
import { Restaurant, RestaurantScore } from '@/types/restaurant'
import { useState } from 'react'

type Props = {
  restaurants: Restaurant[]
}

export default function RestaurantSlider({ restaurants }: Props) {
  const { setRestaurantsFiltered } = useRestaurantLiked()
  const [currentRestaurant, setCurrentRestaurant] = useState<number | null>(0)

  const currentRestaurantInformation: Restaurant | null =
    currentRestaurant === null ? null : restaurants[currentRestaurant]

  const goToNextRestaurant = (
    currentRestaurantScore: RestaurantScore
  ): void => {
    if (currentRestaurant === null || currentRestaurantInformation === null) {
      return
    }

    setRestaurantsFiltered((prevRestaurants) => [
      ...prevRestaurants,
      { ...currentRestaurantInformation, score: currentRestaurantScore },
    ])

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
