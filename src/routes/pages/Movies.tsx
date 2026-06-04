import axios from 'axios'
import { useState } from 'react'
import Button from '@/components/Button'
import { Link, Outlet } from 'react-router'
import MovieSearch from '@/components/movies/MovieSearch'

export interface MoviesResponse {
  Search: Movie[]
  totalResults: string
  Response: string
}
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function Movies() {
  const [movies] = useState<Movie[]>([])

  return (
    <>
      <MovieSearch />
      <ul className="flex flex-wrap gap-5">
        {movies.map(movie => {
          return (
            <li
              key={movie.imdbID}
              className="w-[100px] cursor-pointer">
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
        })}
      </ul>
      <Outlet />
    </>
  )
}
