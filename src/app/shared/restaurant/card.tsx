import { Button } from '@/components/ui/button'
import { Restaurant } from '@/types/restaurant'
import { HeartIcon, ThumbsDownIcon } from 'lucide-react'

type Props = Restaurant
export default function RestaurantCard({ name }: Props) {
  return (
    <article className="relative group min-h overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <figure className="w-full h-full">
        <img
          alt="Menu Item 1"
          className="object-cover w-full h-full"
          height="256"
          src="https://via.placeholder.com/343x256"
          width="343"
        />
      </figure>
      <div className="absolute bottom-5 left-5">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl">{name}</h3>
        </div>
      </div>
    </article>
  )
}
