import { useParams } from 'react-router-dom'
import { useSWRInfinite } from 'swr'
import { fetcher } from 'core/hooks/useFetch'
import { useLocalStorage } from 'core/hooks/useLocalStorage'
import { PopularMovies, SearchMovies } from 'core/providers'

import { Button, Spinner } from 'components'
import { KeyboardBackspace as Back } from '@styled-icons/material/KeyboardBackspace'
import { BackButton, ContainerListMovies, ContainerActions } from './styled'

import MovieItem from './Item'

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
interface IList {
  results: Array<IMovie>
}

type TParams = { id: string; page: string; query?: string }

const MovieList = () => {
  const { page, query } = useParams<TParams>()

  const currentPage = page
  const [storedFavorite, setFavorite] = useLocalStorage<Array<IMovie>>(
    'favorites',
    []
  )

  const [storedWatchList, setWatchList] = useLocalStorage<Array<IMovie>>(
    'watchlist',
    []
  )

  const root: any = {
    search: SearchMovies,
    undefined: PopularMovies
  }

  const { data, size, error, setSize } = useSWRInfinite(
    (index) => root[currentPage](index + 1, query),
    fetcher
  )

  const isLoadingInitialData = !data && !error

  const updateListOfMovies = (page: string) => {
    const defaultList = data ? [].concat(...data) : []
    const map: { [key: string]: any } = {
      favorites: [{ results: storedFavorite }],
      watchlist: [{ results: storedWatchList }]
    }
    return map[page] || defaultList
  }

  const listOfMovies = updateListOfMovies(currentPage)

  const movieList = ({ results }: IList) => {
    if (results.length === 0) return <h2 key="list">No movies to list!!</h2>

    return results.map((item: IMovie) => (
      <MovieItem
        key={item.id}
        {...item}
        favList={storedFavorite}
        watchList={storedWatchList}
        updateFav={(list: IMovie[]) => setFavorite(list)}
        updateWatch={(list: IMovie[]) => setWatchList(list)}
      />
    ))
  }

  const renderPageTitle = () => {
    const defaultTitle = 'Popular Movies'
    const map: { [key: string]: any } = {
      favorites: 'My favorites movies',
      watchlist: 'My watchlist of movies',
      search: `Results for '${query}'`
    }
    return map[currentPage] || defaultTitle
  }

  return (
    <section style={{ margin: '100px 4% 20px' }}>
      {currentPage !== undefined && (
        <BackButton to="/" title="Back">
          <Back size={30} />
        </BackButton>
      )}
      <h1>{renderPageTitle()}</h1>
      {isLoadingInitialData &&
        currentPage !== 'favorites' &&
        currentPage !== 'watchlist' && <Spinner />}
      <ContainerListMovies>
        {listOfMovies && listOfMovies.map((movies: IList) => movieList(movies))}
      </ContainerListMovies>
      <ContainerActions>
        {currentPage !== 'favorites' && currentPage !== 'watchlist' && (
          <Button onClick={() => setSize(size + 1)}>LOAD MORE</Button>
        )}
      </ContainerActions>
    </section>
  )
}

export default MovieList
