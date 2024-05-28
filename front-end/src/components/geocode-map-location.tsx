import { cn } from '@/lib/utils'
import React from 'react'
import { Button } from '@/components/ui/button'

export default function GeocodeMapLocation({ display_name }: GeocodeMaps) {
  return <Button className="whitespace-normal h-fit">{display_name}</Button>
}
