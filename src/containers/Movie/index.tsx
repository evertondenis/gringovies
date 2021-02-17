import { useEffect, useState } from 'react'
import { useFetch } from 'core/hooks/useFetch'

import { getMovie } from 'core/providers/popular-movies'

import Trailer from './MovieTrailer'
import Details from './MovieDetails'

const path = 'https://api.themoviedb.org/3/'

const Movie = ({ match }: any) => {
  const [movie, setMovie] = useState()
  const { data, isLoading, isError } = useFetch(getMovie(match.params.id))

  // if (isLoading) console.log('LOADING')
  // if (isError) console.log('ERROR')
  // if (data) console.log('-- ', data)

  useEffect(() => {
    setMovie(data)
  }, [data])

  return (
    <div>
      <h1>MOVIE PAGE!!!</h1>
      {movie && !isLoading && (
        <Details
          movieInfo={movie}
          img={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        />
      )}
      <Trailer id={match.params.id} />
    </div>
  )
}
export default Movie
