import { useEffect, useState } from 'react'
import { instance } from './libs/axios'
import { requests } from './libs/request'

type Movie = {
  id: string
  name: string
  title: string
  original_name: string
  poster_path: string
  backdrop_path: string
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    ;(async () => {
      const res = await instance.get<{ results: Movie[] }>(
        requests.fetchTrending
      )
      setMovies(res.data.results)
    })()
  }, [])

  console.log(movies)
  return (
    <div className="App">
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <div>{movie.title}</div>
            <img
              src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path}
              alt=""
            />
          </div>
        )
      })}
    </div>
  )
}

export default App
