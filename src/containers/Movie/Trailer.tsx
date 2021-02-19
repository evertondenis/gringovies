import { useFetch } from 'core/hooks/useFetch'
import ReactPlayer from 'react-player/youtube'

const path = 'https://api.themoviedb.org/3/'

const MovieTrailer = (movieID: any) => {
  // console.log(movieID)
  const { data, isLoading, isError } = useFetch(
    `${path}movie/${movieID.id}/videos?api_key=f6a4eba9f0abf6b6cc13764bee3a6052`
  )

  // if (isLoading) console.log('LOADING')
  // if (isError) console.log('ERROR')
  // if (data) console.log(data)

  return (
    <>
      <p>Trailer</p>
      {data && (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${data.results[0].key}`}
        />
      )}
    </>
  )
}

export default MovieTrailer
