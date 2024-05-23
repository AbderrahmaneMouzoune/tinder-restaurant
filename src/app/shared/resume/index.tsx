import { useRestaurantLiked } from '@/lib/context/RestaurantsLikedContext'
import React from 'react'

export default function Resume() {
  const { restaurantsFiltered } = useRestaurantLiked()

  const restaurantsLiked = restaurantsFiltered.filter((r) => r.score === 1)
  const restaurantsDisliked = restaurantsFiltered.filter((r) => r.score === -1)
  const restaurantSuperLiked = restaurantsFiltered.filter(
    (r) => r.score === 1.5,
  )

  if (restaurantsFiltered.length === 0) {
    return null
  }

  return (
    <section>
      {restaurantSuperLiked && (
        <p>
          You got {restaurantSuperLiked.length} restaurant super liked ! ={'>'}{' '}
          {restaurantSuperLiked.map((r) => r.name)}
        </p>
      )}
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
    </section>
  )
}
