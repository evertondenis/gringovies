import { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useFetch } from 'core/hooks/useFetch'
import { getMovie } from 'core/providers'

import { Container, Spinner } from 'components/index'
import { KeyboardBackspace as Back } from '@styled-icons/material/KeyboardBackspace'
import Details from './Details'
import { BackButton } from './styled'

type TParams = { id: string }

const Movie = ({ match }: RouteComponentProps<TParams>) => {
  const [movie, setMovie] = useState()
  const { data, isLoading } = useFetch(getMovie(match.params.id))

  useEffect(() => {
    setMovie(data)
  }, [data])

  return (
    <Container direction="column" margin="80px 0 0 0">
      <BackButton to="/" title="Back">
        <Back size={30} />
      </BackButton>
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
