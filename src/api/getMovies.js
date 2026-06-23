import { wait } from '@/helpers/wait'

const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export async function getMovies({ title, type }) {
  try {
    const url = `${API_URL}/?apikey=${API_KEY}${type !== 'all' ? `&type=${type}` : ''}&s=${title}`
    const response = await fetch(url)
    if (!response.ok) throw new Error('HTTP: ' + response.status)
    const data = await response.json()
    await wait(3000)
    return data
  } catch (error) {
    throw new Error('Something went wrong: ' + error.message, {
      cause: error,
    })
  }
}
