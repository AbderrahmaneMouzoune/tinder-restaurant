'use client'
import { Restaurant } from '@/types/restaurant'
import { createContext, useContext, useState } from 'react'

type RestaurantLikedContextType = {
  restaurantsLiked: Restaurant[]
  restaurantsDisliked: Restaurant[]
  setRestaurantsLiked: React.Dispatch<React.SetStateAction<Restaurant[]>>
  likeRestaurant(restaurant: Restaurant): void
  dislikeRestaurant(restaurant: Restaurant): void
}

const RestaurantLikedContext = createContext<
  RestaurantLikedContextType | undefined
>(undefined)

export const useRestaurantLiked = (): RestaurantLikedContextType => {
  const context = useContext(RestaurantLikedContext)
  if (!context)
    throw new Error(`useRestaurantLiked must be used inside a provider`)

  return context
}

export default function RestaurantsLikedProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [restaurantsLiked, setRestaurantsLiked] = useState<Restaurant[]>([])
  const [restaurantsDisliked, setRestaurantsDisliked] = useState<Restaurant[]>(
    []
  )

  const dislikeRestaurant = (restaurantDisliked: Restaurant) => {
    return setRestaurantsDisliked((prevRestaurantsDisLiked) => [
      ...prevRestaurantsDisLiked,
      restaurantDisliked,
    ])
  }

  const likeRestaurant = (restaurantLiked: Restaurant) => {
    return setRestaurantsLiked((prevRestaurantsLiked) => [
      ...prevRestaurantsLiked,
      restaurantLiked,
    ])
  }

  return (
    <RestaurantLikedContext.Provider
      value={{
        restaurantsLiked,
        restaurantsDisliked,
        setRestaurantsLiked,
        likeRestaurant,
        dislikeRestaurant,
      }}
    >
      {children}
    </RestaurantLikedContext.Provider>
  )
}
