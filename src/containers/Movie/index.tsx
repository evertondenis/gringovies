import { useEffect, useState } from 'react'
import { useFetch } from 'core/hooks/useFetch'
import Trailer from './MovieTrailer'

import Details from './MovieDetails'

const path = 'https://api.themoviedb.org/3/'

const Movie = ({ match }: any) => {
  const [movie, setMovie] = useState()
  const { data, isLoading, isError } = useFetch(
    `${path}movie/${match.params.id}?api_key=f6a4eba9f0abf6b6cc13764bee3a6052`
  )

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
