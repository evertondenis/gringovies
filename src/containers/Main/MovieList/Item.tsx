import Card from '../components/Card'
import Actions from './actions'

interface MovieItemProps {
  id: number
  title: string
  vote_average: number
  release_date: string
  poster_path: string
  favList: Array<FavoriteList>
  watchList: Array<FavoriteList>
  updateFav: (arg: Array<FavoriteList>) => void
  updateWatch: (arg: Array<FavoriteList>) => void
}

interface FavoriteList {
  id: number
  image: string
}

const MovieItem = ({
  id,
  title,
  vote_average,
  poster_path,
  favList,
  watchList,
  updateFav,
  updateWatch
}: MovieItemProps) => {
  return (
    <Card
      key={id}
      img={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      link={`/movie/${id}`}
      title={title}
      average={`${vote_average * 10}%`}
    >
      <Actions
        list={{ id: id, image: poster_path }}
        favList={favList}
        watchList={watchList}
        updateFav={updateFav}
        updateWatch={updateWatch}
      />
    </Card>
  )
}

export default MovieItem
