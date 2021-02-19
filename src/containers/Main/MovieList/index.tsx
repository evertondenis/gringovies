import { withRouter } from 'react-router-dom'
import { useSWRInfinite } from 'swr'
import { fetcher } from 'core/hooks/useFetch'
import { useLocalStorage } from 'core/hooks/useLocalStorage'
import { PopularMovies, SearchMovies } from 'core/providers'

import MovieItem from './Item'
interface FavoriteList {
  id: number
  image: string
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
interface IList {
  results: Array<IMovie>
}

const MovieList = ({ match }: any) => {
  console.log('PARAMS: ', match.params)
  const [storedFavorite, setFavorite] = useLocalStorage<Array<FavoriteList>>(
    'favorites',
    []
  )

  const [storedWatchList, setWatchList] = useLocalStorage<Array<FavoriteList>>(
    'watchlist',
    []
  )

  // SearchMovies(match.params.query, index + 1)

  const root: any = {
    search: SearchMovies,
    undefined: PopularMovies
  }

  const { data, size, setSize } = useSWRInfinite(
    (index) => root[match.params.page](index + 1, match.params.query),
    fetcher
  )
  // const { data, size, setSize } = useSWRInfinite(
  //   (index) => PopularMovies(index + 1),
  //   fetcher
  // )
  const listOfMovies = data ? [].concat(...data) : []

  const movieList = ({ results }: IList) => {
    return results?.map((item: IMovie) => (
      <MovieItem
        key={item.id}
        {...item}
        favList={storedFavorite}
        watchList={storedWatchList}
        updateFav={(list: Array<FavoriteList>) => setFavorite(list)}
        updateWatch={(list: Array<FavoriteList>) => setWatchList(list)}
      />
    ))
  }

  return (
    <section style={{ margin: '100px 4% 20px' }}>
      <div
        style={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}
      >
        {listOfMovies && listOfMovies.map((movies) => movieList(movies))}
      </div>
      <div
        style={{
          display: 'flex',
          height: '80px',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <button
          style={{
            width: '50%',
            backgroundColor: '#222C30',
            padding: '16px',
            color: '#fff',
            border: 'none',
            cursor: 'pointer'
          }}
          onClick={() => setSize(size + 1)}
        >
          LOAD MORE
        </button>
      </div>
    </section>
  )
}

export default withRouter(MovieList)
