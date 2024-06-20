import RestaurantSlider from '@/app/(shared)/restaurant/restaurant-slider'
import { Restaurant } from '@/types/restaurant'

type TinderUiProps = {
  restaurants: Restaurant[]
}

export default function TinderUi({ restaurants }: TinderUiProps) {
  return (
    <main className="flex flex-col h-[100dvh] p-2">
      <header className="py-2">
        <h1 className="text-xl text-center font-bold">Room de abd</h1>
      </header>
      <RestaurantSlider restaurants={restaurants} />
    </main>
  )
}
