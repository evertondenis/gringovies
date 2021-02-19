import { withRouter } from 'react-router-dom'
import { useSWRInfinite } from 'swr'
import { fetcher } from 'core/hooks/useFetch'
import { Link } from 'react-router-dom'

import { SearchMovies } from 'core/providers'

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

const SearchResult = ({ match }: any) => {
  const { data, size, setSize } = useSWRInfinite(
    (index) => SearchMovies(index + 1, match.params.query),
    fetcher
  )
  console.log('DATA: ', data)
  const listOfMovies = data ? [].concat(...data) : []

  const movieList = ({ results }: IList) => {
    return results?.map((item: IMovie) => (
      <div key={item.id} style={{ width: '200px', marginBottom: '20px' }}>
        <Link
          to={`/movie/${item.id}`}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt={item.title}
            style={{ width: '100%' }}
          />
        </Link>
        {item.title}
      </div>
    ))
  }

  return (
    <section style={{ margin: '100px 4% 20px' }}>
      <h1>{`Search for ${match.params.query}`}</h1>
      <div
        style={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}
      >
        {data && listOfMovies.map((movies) => movieList(movies))}
      </div>
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
    </section>
  )
}

export default withRouter(SearchResult)
