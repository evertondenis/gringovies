import { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useFetch } from 'core/hooks/useFetch'
import { getMovie } from 'core/providers'

import { Container, Spinner } from 'components'
import Details from './Details'

type TParams = { id: string }

const Movie = ({ match }: RouteComponentProps<TParams>) => {
  const [movie, setMovie] = useState()
  const { data, isLoading } = useFetch(getMovie(match.params.id))

  console.log('movie: ', movie)

  useEffect(() => {
    setMovie(data)
  }, [data])

  return (
    <Container direction="column" margin="80px 0 0 0">
      {isLoading && <Spinner />}
      {movie && !isLoading && (
        <Details
          movieInfo={movie}
          img={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        />
      )}
    </Container>
  )
}
export default Movie
