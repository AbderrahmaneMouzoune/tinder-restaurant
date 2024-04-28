import { Restaurant } from '@/types/restaurant'
import { GoogleApiResponse } from '@/types/GoogleApiResponse'

export function googleMapsJsonParsingService(
  googleApiResponse: GoogleApiResponse[]
): Restaurant[] {
  const restaurants: Restaurant[] = []
  googleApiResponse.map((restaurant) => {
    restaurants.push({
      name: restaurant.name,
      types: restaurant.types,
      rating: restaurant.rating,
      address: restaurant.vicinity,
      priceLevel: restaurant.price_level,
      isOpen: restaurant.business_status === 'OPERATIONAL',
      place_id: restaurant.place_id,
      photo: restaurant.photos?.[0],
    })
  })
  return restaurants
}
