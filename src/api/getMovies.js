import { wait } from '@/helpers/wait'

const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export async function getMovies({ title, type }, pageParam) {
  try {
    const url = `${API_URL}/?apikey=${API_KEY}${type !== 'all' ? `&type=${type}` : ''}&s=${title}&page=${pageParam}`
    const response = await fetch(url)
    if (!response.ok) throw new Error('HTTP: ' + response.status)
    const data = await response.json()
    // For loading visibility
    await wait(3000)
    if (data.Response === 'False') {
      return { ...data, Search: [] }
    }
    return data
  } catch (error) {
    throw new Error('Something went wrong: ' + error.message, {
      cause: error,
    })
  }
}
