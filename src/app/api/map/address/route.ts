export async function GET(req: Request) {
  const { searchParams: query } = new URL(req.url)
  if (!query) {
    return new Response('No request parameter', {
      status: 400,
    })
  }

  const address = query.get('address')
  if (!address) {
    return new Response('address parameter is required', {
      status: 400,
    })
  }

  const response = await fetch(
    `https://geocode.maps.co/search?q=${address}&api_key=${process.env.GEOCODE_MAPS_API_KEY}`
  )

  const data = await response.json()

  return Response.json(data)
}
