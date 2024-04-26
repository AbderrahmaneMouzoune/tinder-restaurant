import { Button } from '@/components/ui/button'
import { HeartIcon, ThumbsDownIcon } from 'lucide-react'

interface Restaurant {
  title: string
}
export default function RestaurantCard({ title }: Restaurant) {
  return (
    <article className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <img
        alt="Menu Item 1"
        className="object-cover w-full h-64"
        height="256"
        src="https://via.placeholder.com/343x256"
        width="343"
      />
      <div className="bg-white p-4 dark:bg-gray-950">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl">{title}</h3>
        </div>
        <div className="flex items-center justify-end gap-2">
          <Button className="rounded-full" size="icon" variant="ghost">
            <HeartIcon className="w-6 h-6 fill-primary" />
          </Button>
          <Button className="rounded-full" size="icon" variant="ghost">
            <ThumbsDownIcon className="w-6 h-6 fill-muted-foreground" />
          </Button>
        </div>
      </div>
    </article>
  )
}
