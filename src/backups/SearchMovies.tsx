import axios from 'axios'
import { useState } from 'react'
import Button from '@/components/Button'

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

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function fetchMovies() {
    if (searchText.trim().length < 3) return
    setIsLoading(true)
    // await new Promise(resolve => setTimeout(resolve, 3000))
    const { data } = await axios.get(
      `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
    )
    // const movies = data.Search
    setMovies(data.Search)
    setIsLoading(false)
  }

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
          검색
        </Button>
      </div>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.imdbID}>
              <span>{movie.Title}</span>
              <img
                src={movie.Poster}
                alt={movie.Title}
                width={100}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}
