import { useEffect, useState } from 'react'
import { useFetch } from 'core/hooks/useFetch'

const path = 'https://api.themoviedb.org/3/'

const MovieCast = ({ movieId }: any) => {
  console.log('movieId: ', movieId)
  const [movie, setMovie] = useState()
  const { data, isLoading, isError } = useFetch(
    `${path}movie/${movieId}/credits?api_key=f6a4eba9f0abf6b6cc13764bee3a6052`
  )

  useEffect(() => {
    setMovie(movieId)
  }, [movieId])

  // if (isLoading) console.log('LOADING')
  // if (isError) console.log('ERROR')
  // if (data) console.log('-- ', data)

  const getCasting = (cast: any) => {
    const topFive = cast.slice(0, 10)
    console.log('cast: ', topFive)
    return topFive.map((item: any) => (
      <li
        key={item.id}
        style={{
          marginTop: '10px',
          marginBottom: '10px',
          marginLeft: '10px',
          marginRight: '4px',
          border: '1px solid #aeaeae',
          paddingBottom: '10px',
          borderRadius: '4px',
          overflow: 'hidden',
          minWidth: '140px',
          width: '140px',
          backgroundColor: '#fff'
        }}
      >
        <div style={{ minWidth: '138px', width: '138px' }}>
          <img
            src={`https://image.tmdb.org/t/p/w138_and_h175_face/${item.profile_path}`}
            alt={data.title}
            style={{ width: '100%' }}
          />
          <p>{item.name}</p>
        </div>
      </li>
    ))
  }

  return (
    <section style={{ width: '100%', display: 'block', padding: '30px 0' }}>
      <h2>Casting</h2>
      {movie && data && (
        <div
          style={{
            position: 'relative',
            top: 0,
            left: 0
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
            {getCasting(data.cast)}
          </ol>
        </div>
      )}
    </section>
  )
}
export default MovieCast
