import { faker } from '@faker-js/faker'

export function mockupProfile(): Profile {
  return {
    username: faker.internet.userName(),
  }
}
