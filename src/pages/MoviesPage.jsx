import { Suspense, useState } from 'react'
import { SearchBar } from '@/components/SearchBar/SearchBar'
import { Movies } from '@/components/Movies/Movies'
import { Loader } from '@/components/Loader/Loader'

const initialSearch = { title: 'Matrix', type: 'all' }

export function MoviesPage() {
  const [search, setSearch] = useState(initialSearch)

  return (
    <>
      <SearchBar setSearch={setSearch} />
      <Suspense fallback={<Loader margin='7rem auto' isLabel={true} />}>
        <Movies search={search} />
      </Suspense>
    </>
  )
}
