import { Restaurant } from '@/types/restaurant'

const fakeRestaurant: Restaurant[] = Array.from({ length: 5 }).map((_, i) => {
  return {
    name: `Restaurant n° ${i + 1}`,
    types: ['mexicain', 'espagnol'],
    rating: (i * Math.random() * 100) % 5,
    address: `${Math.random() * 100} rue de la gruyère`,
    priceLevel: 2,
    isOpen: Boolean(Math.random() > 0.5),
    placeId: `AZdszaedaee${i}`,
    photo: {
      width: 532,
      height: 523,
      photo_reference: 'lol',
    },
  }
})

export const MOCKUP = {
  restaurants: fakeRestaurant,
}
