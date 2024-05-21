'use client'
import RestaurantSlider from '@/app/shared/restaurant/restaurant-slider'
import { useRestaurantLiked } from '@/lib/restaurants-liked'
import { MOCKUP } from '@/mockup-data/restaurant'

export default function Home() {
  const { restaurantsLiked, restaurantsDisliked } = useRestaurantLiked()
  return (
    <main className="max-h-screen min-h-screen p-5">
      <RestaurantSlider restaurants={MOCKUP.restaurants} />
      <footer>
        {restaurantsLiked && (
          <>
            <p>You liked {restaurantsLiked.length} restaurants</p>
            <ul>
              {restaurantsLiked.map((r) => (
                <li key={r.name}>{r.name}</li>
              ))}
            </ul>
          </>
        )}

        {restaurantsDisliked && (
          <>
            <p>You disliked {restaurantsDisliked.length} restaurants</p>
            <ul>
              {restaurantsDisliked.map((r) => (
                <li key={r.name}>{r.name}</li>
              ))}
            </ul>
          </>
        )}
      </footer>
    </main>
  )
}
