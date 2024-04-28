import { fetcherGoogleMap } from '@/lib/google-map-api'

export async function GET(req: Request) {
  const { searchParams: query } = new URL(req.url)
  if (!query) {
    return new Response('No request parameter', {
      status: 400,
    })
  }

  const place_id = query.get('place_id')
  if (!place_id) {
    return new Response('place_id parameter is required', {
      status: 400,
    })
  }

  const params = {
    place_id: `${place_id}`,
    fields: ['name, rating, formatted_phone_number, formatted_adress'],
  }
  return await fetcherGoogleMap('/place/details/json', params)
}
