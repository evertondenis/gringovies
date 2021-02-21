import { withRouter, RouteComponentProps } from 'react-router-dom'
import { useSWRInfinite } from 'swr'
import { fetcher } from 'core/hooks/useFetch'
import { useLocalStorage } from 'core/hooks/useLocalStorage'
import { PopularMovies, SearchMovies } from 'core/providers'

import { Button, Spinner } from 'components'

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

const MovieList = ({ match }: RouteComponentProps<TParams>) => {
  const currentPage = match.params.page
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
    (index) => root[currentPage](index + 1, match.params.query),
    fetcher
  )

  const isLoadingInitialData = !data && !error

  const foo = (page: string) => {
    console.log('data', data)
    const defaultList = data ? [].concat(...data) : []
    const map: { [key: string]: any } = {
      favorites: [{ results: storedFavorite }],
      watchlist: [{ results: storedWatchList }]
    }
    return map[page] || defaultList
  }

  const listOfMovies = foo(currentPage)

  const movieList = ({ results }: IList) => {
    return results?.map((item: IMovie) => (
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

  return (
    <section style={{ margin: '100px 4% 20px' }}>
      {isLoadingInitialData &&
        currentPage !== 'favorites' &&
        currentPage !== 'watchlist' && <Spinner />}
      <div
        style={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}
      >
        {listOfMovies && listOfMovies.map((movies: IList) => movieList(movies))}
      </div>
      <div
        style={{
          display: 'flex',
          height: '80px',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {currentPage !== 'favorites' && currentPage !== 'watchlist' && (
          <Button onClick={() => setSize(size + 1)}>LOAD MORE</Button>
        )}
      </div>
    </section>
  )
}

export default withRouter(MovieList)
