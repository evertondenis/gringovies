import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { useLocalStorage } from 'core/hooks/useLocalStorage'

import { usePalette } from 'react-palette'
import Actions from 'containers/Main/MovieList/actions'
import Cast from './Cast'
import SimilarMovies from './SimilarMovies'

import {
  Container,
  Content,
  Details,
  Wrapper,
  WrapperPoster,
  Title,
  Certification,
  TagItem,
  Tags,
  Overview,
  SubTitle,
  Genres
} from './styled'

import { Spinner, LazyImage } from 'components/index'

const sanitizeDate = (value: string) => {
  return value.replaceAll('-', '/')
}

interface ReleaseDates {
  release_dates: Array<Certification>
}
interface CertificationProps {
  results: Array<ReleaseDates>
}
interface IMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: []
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  release_date: string
}

interface Movie extends IMovie {
  id: number
  poster_path: string
  title: string
  tagline: string
  overview: string
  status: string
  genres: null
  release_date: string
  release_dates: CertificationProps
  vote_average: number
}
interface Certification {
  certification: string
  note: string
  release_date: string
  type: number
}

const MovieDetails = ({ movieInfo, img }: any) => {
  const [storedFavorite, setFavorite] = useLocalStorage<Array<IMovie>>(
    'favorites',
    []
  )

  const [storedWatchList, setWatchList] = useLocalStorage<Array<IMovie>>(
    'watchlist',
    []
  )

  const [movie, setMovie] = useState<Movie>()
  const { data, loading } = usePalette(img)

  useEffect(() => {
    setMovie(movieInfo)
  }, [movieInfo])

  const getGenres = (genres: any) => {
    if (genres) {
      const list = genres.map((item: any) => item.name)
      return list.toString()
    }
  }

  const getCertification = ({ results }: CertificationProps) => {
    const iso = Object.keys(results[0])[0]
    if (results) {
      const value = results.find((item: any) => item[iso] === 'US')

      return value?.release_dates[0].certification.toString()
    }
  }

  return (
    <>
      {loading && <Spinner />}
      {movie && !loading && (
        <>
          {data && (
            <>
              <Wrapper image={img}></Wrapper>
              <Container>
                <WrapperPoster>
                  <LazyImage
                    src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                    alt={movie.title}
                  />
                </WrapperPoster>

                <Content>
                  <Title>{movie.title}</Title>
                  <SubTitle>{movie.tagline}</SubTitle>
                  <Tags>
                    <TagItem>
                      <Certification>
                        <p>{getCertification(movie.release_dates)}</p>
                      </Certification>
                    </TagItem>
                    <TagItem>
                      {format(
                        new Date(sanitizeDate(movie.release_date)),
                        'yyyy'
                      )}
                    </TagItem>
                    <TagItem>{movie.vote_average * 10}%</TagItem>
                    <TagItem>
                      <Actions
                        list={movie}
                        favList={storedFavorite}
                        watchList={storedWatchList}
                        updateFav={setFavorite}
                        updateWatch={setWatchList}
                      />
                    </TagItem>
                  </Tags>
                  <Genres>{getGenres(movie.genres)}</Genres>
                  <Overview>
                    <p>{movie.overview}</p>
                  </Overview>
                </Content>
                <Details>
                  <Cast id={movie.id} />
                </Details>
              </Container>
              <SimilarMovies id={movie.id} />
            </>
          )}
        </>
      )}
    </>
  )
}

export default MovieDetails
