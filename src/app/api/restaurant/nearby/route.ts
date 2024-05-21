import { fetcherGoogleMap } from '@/lib/google-map-api'
import { googleMapsJsonParsingService } from '@/lib/services/GoogleMapsJsonParsingService'
import { GoogleApiResponse } from '@/types/GoogleApiResponse'
import { Restaurant } from '@/types/restaurant'

let googleApiResponseData: GoogleApiResponse[] | undefined

export async function GET(req: Request) {
  const { searchParams: query } = new URL(req.url)
  if (!query) {
    return new Response('No request parameter', {
      status: 400,
    })
  }

  const latitude = query.get('latitude')
  const longitude = query.get('longitude')

  if (!latitude || !longitude) {
    return new Response('Address parameter is required', {
      status: 400,
    })
  }

  try {
    googleApiResponseData = await fetchGooglePlaces(latitude, longitude)
  } catch (error) {
    console.error(error)
  }

  if (!googleApiResponseData) {
    return new Response('No results found', {
      status: 404,
    })
  }
  const restaurants: Restaurant[] = googleMapsJsonParsingService(
    googleApiResponseData,
  )
  if (googleApiResponseData.length === 0) {
    return new Response('No results found', {
      status: 404,
    })
  }

  return Response.json({ restaurants })
}

async function fetchGooglePlaces(
  latitude: any,
  longitude: any,
): Promise<GoogleApiResponse[]> {
  const radius = 1500
  const type = 'restaurant'
  let nextPageToken: string | undefined = undefined
  let results: any[] = []

  do {
    try {
      let params: any = {
        location: `${latitude},${longitude}`,
        radius: `${radius}`,
        type,
      }

      if (nextPageToken) {
        params = { ...params, pageToken: `${nextPageToken}` }
      }

      const response = await fetcherGoogleMap(
        '/place/nearbysearch/json',
        params,
      )

      results = results.concat(response.results)
      nextPageToken = response.next_page_token
    } catch (error) {
      console.error(error)
      return []
    }
  } while (nextPageToken && results.length < 100)
  return results
}
