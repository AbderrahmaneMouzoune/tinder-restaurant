import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = 'https://maps.googleapis.com/maps/api/place/details/json'
  const { place_id } = req.query
  if (!place_id) {
    res.status(400).json({ message: 'place_id is required' })
    return
  }
  if (!process.env.GOOGLE_API_KEY) {
    res.status(400).json({ message: 'GOOGLE_API_KEY missing' })
    return
  }
  const apiKey = process.env.GOOGLE_API_KEY
  const googleDetailApiUrl = baseUrl
    + `?place_id=${place_id}&fields=name%2Crating%2Cformatted_phone_number%2Cformatted_address&key=${apiKey}`
  const googleApiResponse = await axios.get(googleDetailApiUrl)
  if (googleApiResponse.status !== 200) {
    res.status(404).json({ message: 'Google Api call has failed' })
    return;
  }
  res.status(200).json(googleApiResponse.data)
}