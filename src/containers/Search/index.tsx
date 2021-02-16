import { withRouter } from 'react-router-dom'
import { useFetch } from 'core/hooks/useFetch'
import { Link } from 'react-router-dom'

const SearchResult = ({ match }: any) => {
  const path = 'https://api.themoviedb.org/3/'

  const { data, isLoading, isError } = useFetch(
    `${path}search/multi?query=${match.params.query}&api_key=f6a4eba9f0abf6b6cc13764bee3a6052`
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
