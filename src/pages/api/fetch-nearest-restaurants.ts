import { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosResponse } from 'axios'
import { googleMapsJsonParsingService } from '@/pages/services/GoogleMapsJsonParsingService'
import { GoogleApiResponse } from '@/types/GoogleApiResponse'
import { Restaurant } from '@/types/restaurant'

let googleApiResponseData: GoogleApiResponse[] | undefined;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { latitude, longitude } = req.query
  if (!latitude || !longitude) {
    res.status(400).json({ message: 'Address parameter is required' })
    return
  }
  if (!process.env.GOOGLE_API_KEY) {
    res.status(400).json({ message: 'GOOGLE_API_KEY missing' })
    return
  }
  const apiKey = process.env.GOOGLE_API_KEY
  try {
    googleApiResponseData = await fetchGooglePlaces(latitude, longitude, apiKey)
  } catch (error) {
    console.error(error)
  }
  if (!googleApiResponseData) {
    res.status(404).json({ message: 'No results found' })
    return
  }
  const restaurants: Restaurant[] = googleMapsJsonParsingService(googleApiResponseData)
  if (googleApiResponseData.length === 0) {
    res.status(404).json({ message: 'No results found' })
    return
  }
  res.status(200).json(restaurants)
  return
}

async function fetchGooglePlaces(latitude: any, longitude: any, apiKey: string): Promise<GoogleApiResponse[]> {
  const baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
  const radius = 1500
  const type = 'restaurant'
  let nextPageToken: string | undefined = undefined
  let results: any[] = []

  do {
    try {
      const url = nextPageToken ?
        `${baseUrl}?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${apiKey}&pageToken=${nextPageToken}` :
        `${baseUrl}?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${apiKey}`
      const response: AxiosResponse<any> = await axios.get(url)
      if (response.status !== 200) {
        throw new Error('Google API call has failed')
      }
      results = results.concat(response.data.results)
      nextPageToken = response.data.next_page_token

    } catch (error) {
      console.error(error)
      return []
    }
  } while (nextPageToken && results.length < 100)
  return results
}