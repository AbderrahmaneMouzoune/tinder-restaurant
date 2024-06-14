interface Restaurant {
  name: string
  types: string[]
  rating: number
  address: string
  priceLevel: number
  isOpen: boolean
  placeId: string
  photo: GoogleMapsPhotos
}

interface GoogleMapsPhotos {
  height: number
  photo_reference: string
  width: number
}

type RestaurantWithScore = Restaurant & {
  score: RestaurantScore
}

type RestaurantScore = 1 | -1 | 0 | 1.5
