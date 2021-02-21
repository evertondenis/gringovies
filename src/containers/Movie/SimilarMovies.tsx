import { useFetch } from 'core/hooks/useFetch'
import { getSimilar } from 'core/providers'

const SimilarMovies = ({ id }: any) => {
  const { data, isLoading } = useFetch(getSimilar(id))

  const renderMovies = (results: any) => {
    return results.map((item: any) => (
      <li
        key={item.id}
        style={{
          marginTop: '10px',
          marginBottom: '10px',
          marginLeft: '10px',
          marginRight: '4px',
          paddingBottom: '10px',
          borderRadius: '4px',
          overflow: 'hidden',
          minWidth: '180px',
          width: '180px',
          height: '270px',
          backgroundColor: '#fff'
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={data.title}
          style={{ width: '100%' }}
        />
      </li>
    ))
  }

  return (
    <>
      {data && !isLoading && (
        <div
          style={{
            position: 'relative',
            top: 0,
            left: 0,
            margin: '30px 0 15px 4%'
          }}
        >
          <ol
            className="hide-scrollbar"
            style={{
              overflowX: 'scroll',
              overflowY: 'hidden',
              marginLeft: '-10px',
              marginTop: '-10px',
              paddingBottom: '10px',
              listStyleType: 'none',
              listStylePosition: 'inside',
              display: 'flex',
              position: 'relative',
              top: 0,
              left: 0
            }}
          >
            {renderMovies(data.results)}
          </ol>
        </div>
      )}
    </>
  )
}

export default SimilarMovies
