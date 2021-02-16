import { useEffect, useState } from 'react'

import { usePalette } from 'react-palette'
import Casting from './MovieCast'

interface Movie {
  id: number
  poster_path: string
  title: string
  tagline: string
  overview: string
  status: string
  genres: null
}

const MovieDetails = ({ movieInfo, img }: any) => {
  console.log(img)
  const [movie, setMovie] = useState<Movie>()
  const { data, loading, error } = usePalette(img)

  useEffect(() => {
    setMovie(movieInfo)
  }, [movieInfo])

  const getGenres = (genres: any) => {
    if (genres) {
      const list = genres.map((item: any) => item.name)
      return list.toString()
    }
  }

  function getContrastYIQ(hexcolor: any) {
    console.log(hexcolor)
    if (hexcolor) {
      if (hexcolor.slice(0, 1) === '#') {
        hexcolor = hexcolor.slice(1)
        const r = parseInt(hexcolor.substr(0, 2), 16)
        const g = parseInt(hexcolor.substr(2, 2), 16)
        const b = parseInt(hexcolor.substr(4, 2), 16)
        const yiq = (r * 299 + g * 587 + b * 114) / 1000
        return yiq >= 128 ? 'black' : 'white'
      }
    }
  }

  return (
    <>
      {loading && <p>LOADING...</p>}
      {movie && !loading && (
        <>
          {data && (
            <div
              style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${img})`,
                width: '100%',
                position: 'relative'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  backgroundColor: `${data.vibrant}`,
                  opacity: 0.9,
                  width: '100%',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    minWidth: '300px',
                    maxWidth: '300px'
                  }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                    alt={data.title}
                    style={{ width: '100%' }}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'start',
                    alignContent: 'center',
                    boxSizing: 'border-box',
                    color: getContrastYIQ(data.vibrant),
                    flexDirection: 'column'
                  }}
                >
                  <div>
                    <p>{movie.title}</p>
                  </div>
                  <div>
                    <p>{getGenres(movie.genres)}</p>
                  </div>
                  <div>
                    <p>{movie.tagline}</p>
                    <p>Overview: {movie.overview}</p>
                    <p>Status: {movie.status}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <Casting movieId={movie.id} />
        </>
      )}
    </>
  )
}

export default MovieDetails
