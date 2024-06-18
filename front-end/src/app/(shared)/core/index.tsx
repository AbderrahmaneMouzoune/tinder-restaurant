'use client'
import Generator from '@/app/(shared)/generator'
import TinderUi from '@/app/(shared)/tinderui'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { useGeoLocation } from '@/utils/context/GeoLocationContext'

export default function Core() {
  const { location } = useGeoLocation()
  const isLocationValid = (location: TLocation) => {
    return location.latitude && location.longitude
  }
  // if (isLocationValid(location)) {
  //   return <TinderUi />
  // }

  // if (isLocationValid(location)) {
  //   return (
  //     <h2 className="text-xl text-center">
  //       Commencer la room pour {location.latitude} / {location.longitude}
  //     </h2>
  //   )
  // }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-full" variant={'outline'}>
          {isLocationValid(location)
            ? 'X Restaurants'
            : 'Choisir la liste de restaurants'}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Entrer votre localisation</DrawerTitle>
        </DrawerHeader>
        <Generator />
      </DrawerContent>
    </Drawer>
  )
}
