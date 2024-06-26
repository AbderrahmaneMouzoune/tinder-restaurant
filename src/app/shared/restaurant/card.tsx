import { Restaurant, RestaurantScore } from '@/types/restaurant'
import { HeartIcon, ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'

type Props = Restaurant & {
  goNextRestaurant(currentRestaurantScore: RestaurantScore): void
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
          <ThumbsDownIcon onClick={() => goNextRestaurant(-1)} />
          <HeartIcon onClick={() => goNextRestaurant(1.5)} />
          <ThumbsUpIcon onClick={() => goNextRestaurant(1)} />
        </div>
      </div>
    </article>
  )
}
