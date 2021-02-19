import { useEffect, useState } from 'react'
import { useFetch } from 'core/hooks/useFetch'

import { getMovie } from 'core/providers'

import Trailer from './Trailer'
import Details from './Details'

const path = 'https://api.themoviedb.org/3/'

const Movie = ({ match }: any) => {
  const [movie, setMovie] = useState()
  const { data, isLoading, isError } = useFetch(getMovie(match.params.id))

  // if (isLoading) console.log('LOADING')
  // if (isError) console.log('ERROR')
  // if (data) console.log('-- ', data)

  console.log('movie: ', movie)

  useEffect(() => {
    setMovie(data)
  }, [data])

  return (
    <section style={{ margin: '80px 0 20px' }}>
      {movie && !isLoading && (
        <Details
          movieInfo={movie}
          img={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        />
      )}
      <Trailer id={match.params.id} />
    </section>
  )
}
export default Movie
