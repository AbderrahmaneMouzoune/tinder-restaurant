import React, { createContext, ReactNode, useContext, useState } from 'react'

interface GeoLocationContextProps {
  location: TLocation
  error: string | null
  updateLocation: ({ longitude, latitude }: TLocation) => void
  getLocation: () => void
}

const GeoLocationContext = createContext<GeoLocationContextProps | undefined>(
  undefined
)

const GeoLocationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [location, setLocation] = useState<TLocation>({
    latitude: null,
    longitude: null,
  })
  const [error, setError] = useState<string | null>(null)

  const handleSuccess = (position: GeolocationPosition) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    })
    setError(null)
  }

  const handleError = (error: GeolocationPositionError) => {
    setError(error.message)
    setLocation({ latitude: null, longitude: null })
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
    } else {
      setError('Geolocation is not supported by this browser.')
    }
  }

  const updateLocation = ({ longitude, latitude }: TLocation) => {
    return setLocation({
      latitude,
      longitude,
    })
  }

  return (
    <GeoLocationContext.Provider
      value={{ location, error, getLocation, updateLocation }}
    >
      {children}
    </GeoLocationContext.Provider>
  )
}

const useGeoLocation = () => {
  const context = useContext(GeoLocationContext)
  if (context === undefined) {
    throw new Error('useGeoLocation must be used within a GeoLocationProvider')
  }
  return context
}

export { GeoLocationProvider, useGeoLocation }
