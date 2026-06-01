import axios from 'axios'
import { useState, useEffect } from 'react'

export default function App() {
  const [movies, setMovies] = useState([])

  // useEffect(실행할함수, 의존성배열)
  useEffect(() => {
    async function fetchMovies() {
      const { data } = await axios.get(
        'https://omdbapi.com?apikey=7035c60c&s=spider'
      )
      // const movies = data.Search
      setMovies(data.Search)
    }
    fetchMovies()
  }, [])

  return (
    <>
      <ul>
        {movies.map(movie => {
          return <li key={movie.imdbID}>{movie.Title}</li>
        })}
      </ul>
    </>
  )
}
