import RestaurantSlider from '@/app/shared/restaurant/restaurant-slider'
import Resume from '@/app/shared/resume'
import { useGeoLocation } from '@/utils/context/GeoLocationContext'
import { useQuery } from '@tanstack/react-query'

export default function TinderUi() {
  const { location } = useGeoLocation()
  const { isPending, error, data } = useQuery({
    queryKey: ['getRestaurants'],
    queryFn: () =>
      fetch(
        `/api/restaurant/nearby?latitude=${location.latitude}&longitude=${location.longitude}`,
      ).then((res) => res.json()),
  })

  if (isPending) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return (
      <h1>
        Une erreur est survenu pour essayer de récupérer les restaurants autour
        de {location.latitude} et {location.longitude}
      </h1>
    )
  }

  if (!data || data.restaurants.length === 0) {
    return (
      <h1>
        Pas de restaurants autour ou une erreur lors de la récupération des
        resto
      </h1>
    )
  }

  return (
    <>
      <RestaurantSlider restaurants={data?.restaurants} />
      <Resume />
    </>
  )
}
