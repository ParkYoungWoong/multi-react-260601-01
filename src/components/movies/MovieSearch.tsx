import { useMovieStore } from '@/stores/movie'
import Button from '@/components/Button'

export default function MovieSearch() {
  const searchText = useMovieStore(state => state.searchText)
  const isLoading = useMovieStore(state => state.isLoading)
  const setSearchText = useMovieStore(state => state.setSearchText)
  const fetchMovies = useMovieStore(state => state.fetchMovies)
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
