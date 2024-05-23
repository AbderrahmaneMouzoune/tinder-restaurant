import { useGeoLocation } from '@/utils/context/GeoLocationContext'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import RestaurantSlider from '@/app/shared/restaurant/restaurant-slider'
import Resume from '@/app/shared/resume'

export default function TinderUi() {
  const { location } = useGeoLocation()
  const { isPending, error, data } = useQuery({
    queryKey: ['getRestaurants'],
    queryFn: () =>
      fetch(
        `/api/restaurant/nearby?latitude=${location.latitude}&longitude=${location.longitude}`
      ).then((res) => res.json()),
  })

  if (error) {
    return (
      <h1>
        Une erreur est survenu pour essayer de récupérer les restaurants autour
        de {location.latitude} et {location.longitude}
      </h1>
    )
  }

  return (
    <>
      <RestaurantSlider restaurants={data.restaurants} />
      <Resume />
    </>
  )
}
