import Card from '../components/Card'
import Actions from './actions'

import ImgNotFound from 'core/assets/images/images.jpeg'

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

interface MovieItemProps extends IMovie {
  id: number
  title: string
  vote_average: number
  release_date: string
  poster_path: string
  favList: Array<IMovie>
  watchList: Array<IMovie>
  updateFav: (arg: IMovie[]) => void
  updateWatch: (arg: IMovie[]) => void
}

const MovieItem = ({
  favList,
  watchList,
  updateFav,
  updateWatch,
  ...rest
}: MovieItemProps) => {
  return (
    <Card
      key={rest.id}
      img={
        rest.poster_path
          ? `https://image.tmdb.org/t/p/w500/${rest.poster_path}`
          : ImgNotFound
      }
      link={`/gringovies/movie/${rest.id}`}
      title={rest.title}
      average={`${rest.vote_average * 10}%`}
    >
      <Actions
        list={rest}
        favList={favList}
        watchList={watchList}
        updateFav={updateFav}
        updateWatch={updateWatch}
      />
    </Card>
  )
}

export default MovieItem
