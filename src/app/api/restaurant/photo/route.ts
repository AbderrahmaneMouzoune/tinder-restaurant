import { fetcherGoogleMap } from '@/lib/google-map-api'

export async function GET(req: Request) {
  const { searchParams: query } = new URL(req.url)
  if (!query) {
    return new Response('No request parameter', {
      status: 400,
    })
  }

  const photo_reference = query.get('photo_reference')
  if (!photo_reference) {
    return new Response('photo_reference parameter is required', {
      status: 400,
    })
  }

  const params = {
    photoreference: `${photo_reference}`,
    sensor: 'false',
    maxheight: '343',
    maxwidth: '256',
  }
  return await fetcherGoogleMap('/place/photo', params)
}
