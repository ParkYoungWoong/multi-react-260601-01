import { useMovieStore } from '@/stores/movie'
import MovieItem from '@/components/movies/MovieItem'

export default function MovieList() {
  const movies = useMovieStore(state => state.movies)
  return (
    <>
      <ul className="flex flex-wrap gap-5">
        {movies.map(movie => {
          return (
            <MovieItem
              key={movie.imdbID}
              movie={movie}
            />
          )
        })}
      </ul>
    </>
  )
}
