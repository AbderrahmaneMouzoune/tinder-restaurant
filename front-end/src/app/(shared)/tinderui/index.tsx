import RestaurantSlider from '@/app/(shared)/restaurant/restaurant-slider'
import { Restaurant } from '@/types/restaurant'

type TinderUiProps = {
  restaurants: Restaurant[]
}

export default function TinderUi({ restaurants }: TinderUiProps) {
  return <RestaurantSlider restaurants={restaurants} />
}
