'use client'
import GeocodeMapLocation from '@/components/geocode-map-location'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { LocateIcon } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { useGeoLocation } from '@/lib/context/GeoLocationContext'

const formSchema = z.object({
  address: z.string().min(5).max(100),
})

export default function Generator() {
  const [places, setPlaces] = useState<GeocodeMaps[]>([])
  const { updateLocation, getLocation } = useGeoLocation()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch(`/api/map/address?address=${values.address}`)
      .then((response) => {
        if (!response.ok)
          throw new Error(
            "Une erreur est survenue pour essayer de récupérer l'adress",
          )
        return response.json()
      })
      .then((data) => {
        toast.success(
          `${data.length} possible adresse récupéré veuillez choisir la bonne`,
        )
        setPlaces(data)
      })
      .catch((error) => {
        toast.error(`Une erreur est survenu`)
        console.error('Erreur survenu ', error)
      })
  }

  return (
    <section className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mx-auto my-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Localisation</FormLabel>
                <FormControl>
                  <Input placeholder="Entrer votre localisation" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Valider mon addresse
          </Button>
        </form>
      </Form>
      <Button variant="outline" className="w-full mt-2" onClick={getLocation}>
        <LocateIcon className="size-5 mr-2" />
        Ou utilisé ma position
      </Button>

      {places.length > 0 && (
        <ul className="space-y-1 mt-2 overflow-auto">
          {places.map((place) => (
            <li
              key={place.place_id}
              onClick={() => {
                if (Number(place.lat) && Number(place.lon)) {
                  updateLocation({
                    longitude: Number(place.lon),
                    latitude: Number(place.lat),
                  })
                }
              }}
            >
              <GeocodeMapLocation {...place} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
