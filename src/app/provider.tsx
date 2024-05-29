'use client'

import { GeoLocationProvider } from '@/utils/context/GeoLocationContext'
import { RestaurantsLikedProvider } from '@/utils/context/RestaurantsLikedContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <GeoLocationProvider>
        <RestaurantsLikedProvider>{children}</RestaurantsLikedProvider>
      </GeoLocationProvider>
    </QueryClientProvider>
  )
}
