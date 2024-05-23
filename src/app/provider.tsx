'use client'

import { GeoLocationProvider } from '@/lib/context/GeoLocationContext'
import { RestaurantsLikedProvider } from '@/lib/context/RestaurantsLikedContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GeoLocationProvider>
      <RestaurantsLikedProvider>{children}</RestaurantsLikedProvider>
    </GeoLocationProvider>
  )
}
