'use client'

import { GeoLocationProvider } from '@/utils/context/GeoLocationContext'
import { ProfileProvider } from '@/utils/context/ProfileContext'
import { RestaurantsProvider } from '@/utils/context/RestaurantsContext'
import { RestaurantsLikedProvider } from '@/utils/context/RestaurantsLikedContext'
import { SocketIoClientProvider } from '@/utils/context/SocketIoProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ProfileProvider>
        <GeoLocationProvider>
          <RestaurantsProvider>
            <RestaurantsLikedProvider>
              <SocketIoClientProvider>{children}</SocketIoClientProvider>
            </RestaurantsLikedProvider>
          </RestaurantsProvider>
        </GeoLocationProvider>
      </ProfileProvider>
    </QueryClientProvider>
  )
}
