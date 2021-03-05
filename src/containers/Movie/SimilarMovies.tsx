import { useFetch } from 'core/hooks/useFetch'
import { getSimilar } from 'core/providers'
import { Link } from 'react-router-dom'

import { LazyImage } from 'components'
import ImgNotFound from 'core/assets/images/images.jpeg'
import {
  ContentSimilar,
  SimilarMovie,
  SubTitle,
  WrapperSimilar
} from './styled'

const SimilarMovies = ({ id }: any) => {
  const { data, isLoading } = useFetch(getSimilar(id))

  const renderMovies = (results: any) => {
    return results.map((item: any) => (
      <SimilarMovie key={item.id}>
        <Link to={`/gringovies/movie/${item.id}`}>
          <LazyImage
            src={
              item.poster_path
                ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                : ImgNotFound
            }
            alt={item.title}
          />
        </Link>
      </SimilarMovie>
    ))
  }

  return (
    <>
      {data && data?.results.length > 0 && !isLoading && (
        <WrapperSimilar>
          <SubTitle>You may also like</SubTitle>
          <ContentSimilar>{renderMovies(data.results)}</ContentSimilar>
        </WrapperSimilar>
      )}
    </>
  )
}

export default SimilarMovies
