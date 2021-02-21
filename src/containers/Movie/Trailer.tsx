import { useFetch } from 'core/hooks/useFetch'
import ReactPlayer from 'react-player/youtube'
import { getTrailer } from 'core/providers'

const path = 'https://api.themoviedb.org/3/'

const MovieTrailer = ({ id }: any) => {
  const { data, isLoading } = useFetch(getTrailer(id))

  // if (isLoading) console.log('LOADING')
  // if (isError) console.log('ERROR')
  // if (data) {
  //   console.log(data)
  //   console.log(
  //     'trailer: ',
  //     data.results.find((item: any) => item.type === 'Trailer')
  //   )
  // }

  const renderButton = () => {
    const trailer = data.results.find((item: any) => item.type === 'Trailer')
    console.log(trailer)
    const disabled = !trailer || false

    return <button disabled={disabled}>Trailer</button>
  }

  return <>{data && !isLoading && renderButton()}</>
}

{
  /* <ReactPlayer
  url={`https://www.youtube.com/watch?v=${data.results[0].key}`}
/> */
}
export default MovieTrailer
