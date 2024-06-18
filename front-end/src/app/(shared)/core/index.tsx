'use client'
import Generator from '@/app/(shared)/generator'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { useRestaurants } from '@/utils/context/RestaurantsContext'
import { ReloadIcon } from '@radix-ui/react-icons'

export default function Core() {
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
      <RestaurantFinder />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Entrer votre localisation</DrawerTitle>
        </DrawerHeader>
        <Generator />
      </DrawerContent>
    </Drawer>
  )
}

function RestaurantFinder() {
  const { restaurants, isLoading } = useRestaurants()

  if (isLoading) {
    return (
      <Button className="w-full" variant={'outline'} disabled>
        <ReloadIcon className={'mr-2 size-4 animate-spin'} />
        Récupération des restaurants
      </Button>
    )
  }
  return (
    <DrawerTrigger asChild>
      <Button className="w-full" variant={'outline'}>
        {restaurants && restaurants.length > 0
          ? `${restaurants.length} restaurants`
          : `Choisir la liste de restaurants`}
      </Button>
    </DrawerTrigger>
  )
}
