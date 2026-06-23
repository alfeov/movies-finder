import { Suspense } from 'react'
import { SearchBar } from '@/components/SearchBar/SearchBar'
import { Movies } from '@/components/Movies/Movies'
import { Loader } from '@/components/Loader/Loader'
import { useSearchParams } from 'react-router'

export function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams()

  const search = {
    title: searchParams.get('title') ?? 'Matrix',
    type: searchParams.get('type') ?? 'all',
  }

  return (
    <>
      <SearchBar search={search} setSearchParams={setSearchParams} />
      <Suspense fallback={<Loader margin='7rem auto' isLabel={true} />}>
        <Movies search={search} />
      </Suspense>
    </>
  )
}
