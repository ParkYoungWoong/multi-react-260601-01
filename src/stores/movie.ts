import { create } from 'zustand'
import { combine } from 'zustand/middleware' // 상태의 타입 추론
import axios from 'axios'

export const useMovieStore = create(
  combine(
    {
      searchText: '',
      isLoading: false,
      movies: []
    },
    (set, get) => {
      return {
        setSearchText: function (searchText: string) {
          set({ searchText })
        },
        fetchMovies: async function () {
          const { searchText } = get()
          if (searchText.trim().length < 3) return
          set({ isLoading: true })
          const { data } = await axios.get(
            `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
          )
          set({
            movies: data.Search,
            isLoading: false
          })
        }
      }
    }
  )
)
