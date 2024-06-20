'use client'
import { RestaurantWithScore } from '@/types/restaurant'
import { createContext, useContext, useState } from 'react'

type RestaurantLikedContextType = {
  restaurantsFiltered: RestaurantWithScore[]
  setRestaurantsFiltered: React.Dispatch<
    React.SetStateAction<RestaurantWithScore[]>
  >
}

const RestaurantLikedContext = createContext<
  RestaurantLikedContextType | undefined
>(undefined)

const useRestaurantLiked = (): RestaurantLikedContextType => {
  const context = useContext(RestaurantLikedContext)
  if (!context)
    throw new Error(`useRestaurantLiked must be used inside a provider`)

  return context
}

const RestaurantsLikedProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [restaurantsFiltered, setRestaurantsFiltered] = useState<
    RestaurantWithScore[]
  >([])

  return (
    <RestaurantLikedContext.Provider
      value={{
        restaurantsFiltered,
        setRestaurantsFiltered,
      }}
    >
      {children}
    </RestaurantLikedContext.Provider>
  )
}

export { RestaurantsLikedProvider, useRestaurantLiked }
