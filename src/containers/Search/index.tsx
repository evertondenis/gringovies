import { withRouter } from 'react-router-dom'
import { useFetch } from 'core/hooks/useFetch'
import { Link } from 'react-router-dom'

import { SearchMovies } from 'core/providers'
import { fetcher } from 'core/hooks/useFetch'

const SearchResult = ({ match }: any) => {
  const path = 'https://api.themoviedb.org/3/'

  const { data, isLoading, isError } = useFetch(
    SearchMovies(match.params.query)
  )

  // if (isLoading) console.log('LOADING')
  // if (isError) console.log('ERROR')
  // if (data) console.log(data)

  const movieList = data?.results.map((item: any) => (
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

  return (
    <>
      <h1>{`Search for ${match.params.query}`}</h1>
      <div
        style={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}
      >
        {data && movieList}
      </div>
    </>
  )
}

export default withRouter(SearchResult)
