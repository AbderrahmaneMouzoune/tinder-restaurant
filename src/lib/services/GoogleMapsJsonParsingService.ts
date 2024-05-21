import { Restaurant } from '@/types/restaurant'
import { GoogleApiResponse } from '@/types/GoogleApiResponse'

export function googleMapsJsonParsingService(
  googleApiResponse: GoogleApiResponse[],
): Restaurant[] {
  return googleApiResponse.map((restaurant) => {
    return {
      name: restaurant.name,
      types: restaurant.types,
      rating: restaurant.rating,
      address: restaurant.vicinity,
      priceLevel: restaurant.price_level,
      isOpen: restaurant.business_status === 'OPERATIONAL',
      placeId: restaurant.place_id,
      photo: restaurant.photos?.[0],
    }
  })
}
