import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { useSWRInfinite } from 'swr'

import { useLocalStorage } from 'core/hooks/useLocalStorage'

const path = 'https://api.themoviedb.org/3/'

const sanitizeDate = (value: string) => {
  return value.replaceAll('-', '/')
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function MovieList() {
  const [storedValue, setValue] = useLocalStorage('movies', [
    { id: 464052, image: '/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg' }
  ])

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) =>
      `${path}discover/movie?sort_by=popularity.desc&api_key=f6a4eba9f0abf6b6cc13764bee3a6052&page=${
        index + 1
      }`,
    fetcher
  )
  const listOfMovies = data ? [].concat(...data) : []

  const setFavorite = (movie: any) => {
    console.log(storedValue)

    const isFavorite = !!storedValue.find((item) => item.id === movie.id)

    if (!isFavorite) {
      const newFavorite = [
        ...storedValue,
        { id: movie.id, image: movie.poster_path }
      ]
      setValue(newFavorite)
    }
  }

  const deleteFavorite = (movie: any) => {
    console.log(storedValue)

    console.log(storedValue.filter((item) => item.id !== movie.id))

    const newList = storedValue.filter((item) => item.id !== movie.id)
    setValue(newList)
  }

  const renderFavorite = (item: any) => {
    const isFavorite = !!storedValue.find((fav) => fav.id === item.id)
    return (
      <>
        {!isFavorite ? (
          <p style={{ cursor: 'pointer' }} onClick={() => setFavorite(item)}>
            like
          </p>
        ) : (
          <p style={{ cursor: 'pointer' }} onClick={() => deleteFavorite(item)}>
            remove
          </p>
        )}
      </>
    )
  }

  // LIST MOVIES
  const movieList = ({ results }: any) => {
    return results.map((item: any) => {
      return (
        <div key={item.id} style={{ width: '200px', marginBottom: '20px' }}>
          <Link
            to={`/movie/${item.id}`}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.title}
              style={{ width: '100%' }}
            />
          </Link>
          {item.title}
          <p>{`${item.vote_average * 10}%`}</p>
          <p>
            {format(new Date(sanitizeDate(item.release_date)), 'MM/dd/yyyy')}
          </p>
          {renderFavorite(item)}
        </div>
      )
    })
  }

  return (
    <>
      <h1>Bem Vindo!</h1>
      <div
        style={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}
      >
        {listOfMovies && listOfMovies.map((movies) => movieList(movies))}
        <button onClick={() => setSize(size + 1)}>LOAD MORE</button>
      </div>
    </>
  )
}

export default MovieList
