import { GoogleMapsPhotos } from './GoogleMapsPhotos'
export interface Restaurant {
  name: string
  types: string[]
  rating: number
  address: string
  priceLevel: number
  isOpen: boolean
  placeId: string
  photo: GoogleMapsPhotos
}
