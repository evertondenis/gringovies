import { useEffect, useState } from 'react'
import { format } from 'date-fns'

import { usePalette } from 'react-palette'
import Casting from './Cast'

import { Spinner, LazyImage } from 'components'

const sanitizeDate = (value: string) => {
  return value.replaceAll('-', '/')
}

interface Movie {
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
interface ReleaseDates {
  release_dates: Array<Certification>
}
interface CertificationProps {
  results: Array<ReleaseDates>
}

const MovieDetails = ({ movieInfo, img }: any) => {
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

  const getCertification = ({ results }: CertificationProps) => {
    console.log('RESULTS: ', Object.keys(results[0])[0])
    const iso = Object.keys(results[0])[0]
    if (results) {
      const value = results.find((item: any) => item[iso] === 'US')

      return value?.release_dates[0].certification.toString()
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

  // <div
  //   style={{
  //     display: 'flex',
  //     backgroundColor: `${data.vibrant}`,
  //     opacity: 0.9,
  //     width: '100%',
  //     position: 'relative'
  //   }}
  // >
  // <div
  //   style={{
  //     display: 'flex',
  //     flexWrap: 'wrap',
  //     alignItems: 'start',
  //     alignContent: 'center',
  //     boxSizing: 'border-box',
  //     color: getContrastYIQ(data.vibrant),
  //     flexDirection: 'column'
  //   }}
  // >
  return (
    <>
      {loading && <Spinner />}
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
                  backgroundColor: 'rgba(0,0,0,.74)',
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
                  <LazyImage
                    src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  {/* <img
                    src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
                    alt={data.title}
                    style={{ width: '100%' }}
                  /> */}
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'start',
                    alignContent: 'center',
                    boxSizing: 'border-box',
                    color: '#fff',
                    flexDirection: 'column'
                  }}
                >
                  <div>
                    <p>{movie.title}</p>
                  </div>
                  {getCertification(movie.release_dates)}
                  <div>
                    <p>
                      {format(
                        new Date(sanitizeDate(movie.release_date)),
                        'MM/dd/yyyy'
                      )}
                    </p>
                    <p>{movie.vote_average * 10}%</p>
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
          {/* <Casting movieId={movie.id} /> */}
        </>
      )}
    </>
  )
}

export default MovieDetails
