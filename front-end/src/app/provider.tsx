'use client'

import { GeoLocationProvider } from '@/utils/context/GeoLocationContext'
import { RestaurantsProvider } from '@/utils/context/RestaurantsContext'
import { RestaurantsLikedProvider } from '@/utils/context/RestaurantsLikedContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <GeoLocationProvider>
        <RestaurantsProvider>
          <RestaurantsLikedProvider>{children}</RestaurantsLikedProvider>
        </RestaurantsProvider>
      </GeoLocationProvider>
    </QueryClientProvider>
  )
}
