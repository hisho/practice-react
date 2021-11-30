import { useEffect, useState } from 'react'
import { instance } from '../libs/axios'
import styles from './Row.module.css'

type Movie = {
  id: string
  name: string
  title: string
  original_name: string
  poster_path: string
  backdrop_path: string
}

type Props = {
  isLarge?: boolean
  title: string
  fetchUrl: string
}

export const Row = (props: Props) => {
  console.log(props.fetchUrl)

  const [movies, setMovies] = useState<Movie[]>([])
  console.log(movies)

  useEffect(() => {
    ;(async () => {
      const res = await instance.get<{ results: Movie[] }>(props.fetchUrl)
      setMovies(res.data.results)
    })()
  }, [props.fetchUrl, setMovies])

  return (
    <div className={'Row'}>
      <h2>{props.title}</h2>
      <div className={styles.list}>
        {movies.map((movie) => {
          return (
            <div className={styles.item} key={movie.id}>
              <div>{movie.title}</div>
              <img
                className={styles.image}
                style={{ aspectRatio: props.isLarge ? '9/16' : '16/9' }}
                src={
                  'https://image.tmdb.org/t/p/original' + movie.backdrop_path
                }
                alt=""
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
