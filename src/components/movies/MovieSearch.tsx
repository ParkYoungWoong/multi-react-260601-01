import { useMovieStore } from '@/stores/movie'
import Button from '@/components/Button'

export default function MovieSearch() {
  const searchText = useMovieStore(s => s.searchText)
  const isLoading = useMovieStore(s => s.isLoading)
  const setSearchText = useMovieStore(s => s.setSearchText)
  const fetchMovies = useMovieStore(s => s.fetchMovies)
  return (
    <>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          onKeyDown={e => {
            if (e.nativeEvent.isComposing) return
            if (e.key === 'Enter') fetchMovies()
          }}
        />
        <Button
          loading={isLoading}
          onClick={() => fetchMovies()}>
          Search!
        </Button>
      </div>
    </>
  )
}
