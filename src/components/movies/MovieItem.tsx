import { Link } from 'react-router'
import type { Movie } from '@/stores/movie'

interface Props {
  movie: Movie
}

export default function MovieItem({ movie }: Props) {
  return (
    <li className="w-[100px] cursor-pointer">
      <Link to={`/movies/${movie.imdbID}`}>
        <span className="block truncate">{movie.Title}</span>
        <img
          src={movie.Poster}
          alt={movie.Title}
          width={100}
        />
      </Link>
    </li>
  )
}
