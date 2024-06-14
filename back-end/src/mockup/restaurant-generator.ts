import { faker } from '@faker-js/faker'

export function mockupRestaurant(): Restaurant {
  return {
    name: faker.company.name(),
    types: faker.helpers.arrayElements(
      ['Italian', 'Chinese', 'Mexican', 'Indian', 'American', 'Japanese'],
      faker.datatype.number({ min: 1, max: 3 })
    ),
    rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
    address: faker.address.streetAddress(),
    priceLevel: faker.datatype.number({ min: 1, max: 4 }),
    isOpen: faker.datatype.boolean(),
    placeId: faker.datatype.uuid(),
    photo: {
      height: faker.datatype.number({ min: 200, max: 400 }),
      photo_reference: faker.datatype.uuid(),
      width: faker.datatype.number({ min: 200, max: 400 }),
    },
  }
}
