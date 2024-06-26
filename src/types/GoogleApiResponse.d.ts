import { GoogleMapsPhotos } from '@/types/GoogleMapsPhotos'

interface GoogleApiResponse {
  business_status: string
  name: string
  photos: GoogleMapsPhotos[]
  rating: number
  types: string[]
  vicinity: string
  price_level: number
  place_id: string
}
