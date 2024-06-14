import { faker } from '@faker-js/faker'
import { mockupRestaurant } from './restaurant-generator'
import { mockupProfile } from './profile-generator'

export function mockupRooms(n: number): Room[] {
  return Array.from({ length: n }, mockupRoom)
}

export function mockupRoom(): Room {
  return {
    id: faker.datatype.uuid(),
    host: mockupProfile(),
    restaurants: Array.from(
      { length: faker.datatype.number({ min: 1, max: 5 }) },
      mockupRestaurant
    ),
    participants: Array.from(
      { length: faker.datatype.number({ min: 1, max: 10 }) },
      mockupProfile
    ),
  }
}
