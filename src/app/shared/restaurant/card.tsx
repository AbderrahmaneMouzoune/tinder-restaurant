import { Button } from '@/components/ui/button'
import { Restaurant } from '@/types/restaurant'
import { HeartIcon, ThumbsDownIcon } from 'lucide-react'

type Props = Restaurant & {
  goNextRestaurant(liked: boolean): void
}

export default function RestaurantCard({ name, goNextRestaurant }: Props) {
  return (
    <article className="relative">
      <figure className="w-full h-full">
        <img
          alt="Menu Item 1"
          className="object-cover w-full h-full"
          height="256"
          src="https://via.placeholder.com/343x256"
          width="343"
        />
      </figure>
      <div className="absolute bottom-5 left-5 right-5">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl">{name}</h3>
        </div>

        <div className="mt-5 flex gap-5 justify-between">
          <ThumbsDownIcon onClick={() => goNextRestaurant(false)} />
          <HeartIcon onClick={() => goNextRestaurant(true)} />
        </div>
      </div>
    </article>
  )
}
