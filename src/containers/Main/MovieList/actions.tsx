import { HeartFill } from '@styled-icons/bootstrap/HeartFill'
import { Bookmark } from '@styled-icons/boxicons-solid/Bookmark'

import { Button, WrapperActions } from './styled'

interface List {
  id: number
  image: string
}

// ('{ id: number; title: string; vote_average: number; release_date: string; poster_path: string; }')

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

interface Props {
  list: IMovie
  favList: Array<IMovie>
  watchList: Array<IMovie>
  updateFav: (arg: Array<IMovie>) => void
  updateWatch: (arg: Array<IMovie>) => void
}

const Actions = ({
  list,
  favList,
  watchList,
  updateFav,
  updateWatch
}: Props) => {
  const addNewFav = (listFav: IMovie) => {
    const isFav = !!favList.find((item: IMovie) => item.id === listFav.id)

    if (!isFav) {
      updateFav([...favList, listFav])
    }
  }
  const addNewWatch = (listWatch: IMovie) => {
    const isWatch = !!watchList.find((item: IMovie) => item.id === listWatch.id)
    if (!isWatch) {
      updateWatch([...watchList, listWatch])
    }
  }

  const deleteFav = (id: number) => {
    const newList = favList.filter((item: IMovie) => item.id !== id)
    updateFav(newList)
  }

  const deleteWatch = (id: number) => {
    const newList = watchList.filter((item: IMovie) => item.id !== id)
    updateWatch(newList)
  }

  const isFav = !!favList.find((item: IMovie) => item.id === list.id)
  const isWatch = !!watchList.find((item: IMovie) => item.id === list.id)

  return (
    <WrapperActions>
      <Button
        style={{ cursor: 'pointer' }}
        onClick={() => (isFav ? deleteFav(list.id) : addNewFav(list))}
      >
        <HeartFill
          size="16"
          title="Favorite"
          color={isFav ? '#ff424f' : '#fff'}
        />
      </Button>
      <Button
        style={{ cursor: 'pointer' }}
        onClick={() => (isWatch ? deleteWatch(list.id) : addNewWatch(list))}
      >
        <Bookmark
          size="18"
          title="Watchist"
          color={isWatch ? '#ff424f' : '#fff'}
        />
      </Button>
    </WrapperActions>
  )
}

export default Actions
