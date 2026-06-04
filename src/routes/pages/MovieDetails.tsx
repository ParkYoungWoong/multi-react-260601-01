import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export interface Movie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
export interface Rating {
  Source: string
  Value: string
}

// http://localhost:5173/movies/tt01234567
export default function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    async function fetchMovie() {
      const { data } = await axios.get(
        `https://omdbapi.com?apikey=7035c60c&i=${movieId}`
      )
      setMovie(data)
    }
    fetchMovie()
  }, [movieId])

  return (
    <>
      {movie && (
        <>
          <h1>{movie.Title}</h1>
          <img
            src={`https://img.omdbapi.com?apikey=7035c60c&i=${movieId}&h=1523`}
            alt={movie.Title}
          />
          <p>{movie.Actors}</p>
          <p>{movie.Plot}</p>
          <ul>
            {movie.Ratings.map(rating => {
              return (
                <li key={rating.Source}>
                  {rating.Source}: {rating.Value}
                </li>
              )
            })}
          </ul>
        </>
      )}
    </>
  )
}
