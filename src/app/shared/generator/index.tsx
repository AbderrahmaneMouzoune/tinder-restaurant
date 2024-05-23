import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LocateIcon } from 'lucide-react'
import React from 'react'

export default function Generator() {
  return (
    <form className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4 mx-auto my-5">
      <div className="grid gap-2">
        <Label htmlFor="location">Localisation</Label>
        <div className="flex flex-col gap-2">
          <Input id="location" placeholder="Enter your location" type="text" />
          <Button variant="outline">
            <LocateIcon className="size-5 mr-2" />
            Ou utilisé ma position
          </Button>
        </div>
      </div>
      <Button className="w-full" type="submit">
        Générer la liste de restaurants
      </Button>
    </form>
  )
}
