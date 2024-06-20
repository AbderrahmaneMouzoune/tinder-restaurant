import { Button } from '@/components/ui/button'
import { Restaurant, RestaurantScore } from '@/types/restaurant'
import { HeartIcon, ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'
import Image from 'next/image'

type Props = Restaurant & {
  goNextRestaurant(currentRestaurantScore: RestaurantScore): void
}

export default function RestaurantCard({ name, goNextRestaurant }: Props) {
  return (
    <article className="flex flex-col gap-2 w-full h-full">
      <figure className="w-full grow rounded-2xl relative">
        <Image
          alt="Menu Item 1"
          className="object-cover w-full h-full rounded-2xl"
          height={256}
          width={343}
          src={'https://via.placeholder.com/343x256'}
        />

        <h3 className="font-bold break-words text-xl absolute bottom-5 left-5">
          {name}
        </h3>
      </figure>

      <div className="px-5 pb-5 flex gap-5 justify-center items-center">
        <Button
          className="size-10 rounded-full p-3"
          onClick={() => goNextRestaurant(-1)}
        >
          <ThumbsDownIcon />
        </Button>

        <Button
          className="size-12 rounded-full p-3"
          onClick={() => goNextRestaurant(1.5)}
        >
          <HeartIcon />
        </Button>

        <Button
          className="size-10 rounded-full p-3"
          onClick={() => goNextRestaurant(1)}
        >
          <ThumbsUpIcon />
        </Button>
      </div>
    </article>
  )
}
