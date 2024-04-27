import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = 'https://maps.googleapis.com/maps/api/place/photo'
  const { photo_reference } = req.query
  if (!photo_reference) {
    res.status(400).json({ message: 'place_id is required' })
    return
  }
  if (!process.env.GOOGLE_API_KEY) {
    res.status(400).json({ message: 'GOOGLE_API_KEY missing' })
    return
  }
  const apiKey = process.env.GOOGLE_API_KEY
  const googlePhotoApiUrl = baseUrl
    + `?photoreference=${photo_reference}&sensor=false&maxheight=$343&maxwidth=256&key=${apiKey}`
  const response = await axios.get(googlePhotoApiUrl)
  if (response.status !== 200) {
    res.status(404).json({ message: 'Google Api call has failed' })
    return
  }
  res.status(200).json(response.data)
}