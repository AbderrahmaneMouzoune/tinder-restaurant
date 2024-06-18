import { Restaurant } from '@/types/restaurant'
import { useQuery } from '@tanstack/react-query'
import React, { createContext, ReactNode, useContext, useState } from 'react'
import { useGeoLocation } from './GeoLocationContext'

interface RestaurantsContextProps {
  restaurants: Restaurant[]
  isLoading: boolean
  error: Error | null
}

const RestaurantsContext = createContext<RestaurantsContextProps | undefined>(
  undefined
)

const RestaurantsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { location } = useGeoLocation()

  const { isPending, error, data } = useQuery({
    queryKey: ['getRestaurants'],
    enabled: !!location.latitude && !!location.longitude,
    queryFn: () =>
      fetch(
        `/api/restaurant/nearby?latitude=${location.latitude}&longitude=${location.longitude}`
      ).then((res) => res.json()),
    initialData: [],
  })

  //   const {
  //     isPending,
  //     error,
  //     data: restaurants,
  //   } = useQuery({
  //     queryKey: ['getRestaurants'],
  //     enabled: !!location.latitude && !!location.longitude,
  //     queryFn: fetchRestaurants,
  //   })

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: data.restaurants || [],
        isLoading: isPending,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  )
}

const useRestaurants = () => {
  const context = useContext(RestaurantsContext)
  if (context === undefined) {
    throw new Error('useRestaurants must be used within a RestaurantsProvider')
  }
  return context
}

export { RestaurantsProvider, useRestaurants }
