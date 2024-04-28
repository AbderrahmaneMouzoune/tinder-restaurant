import qs from 'qs'

export async function fetcherGoogleMap(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  if (!process.env.GOOGLE_API_KEY) {
    throw new Error('No Google Api Key')
  }

  try {
    const cacheDuration: number =
      process.env.NODE_ENV === 'development' ? 0 : 60
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: cacheDuration },
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    }

    // Build request URL
    const queryString = qs.stringify(urlParamsObject)
    const requestUrl =
      'https://maps.googleapis.com/maps' +
      `/api${path}${queryString ? `?${queryString}` : ''}&key=${
        process.env.GOOGLE_API_KEY
      }`

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw new Error(
      `Please check if your server is running and you set all the required tokens.`
    )
  }
}
