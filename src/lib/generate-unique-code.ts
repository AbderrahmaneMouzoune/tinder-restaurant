import { nanoid } from 'nanoid'

export function generateUniqueCode(): string {
  return nanoid(10)
}
