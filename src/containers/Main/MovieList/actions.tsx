import { HeartFill } from '@styled-icons/bootstrap/HeartFill'
import { Bookmark } from '@styled-icons/boxicons-solid/Bookmark'

import { Button, WrapperActions } from './styled'

interface List {
  id: number
  image: string
}

interface Props {
  list: List
  favList: Array<List>
  watchList: Array<List>
  updateFav: (arg: Array<List>) => void
  updateWatch: (arg: Array<List>) => void
}

const Actions = ({
  list,
  favList,
  watchList,
  updateFav,
  updateWatch
}: Props) => {
  const addNewFav = ({ id, image }: List) => {
    const isFav = !!favList.find((item: List) => item.id === id)

    if (!isFav) {
      updateFav([...favList, { id: id, image: image }])
    }
  }
  const addNewWatch = ({ id, image }: List) => {
    const isWatch = !!watchList.find((item: List) => item.id === id)
    if (!isWatch) {
      updateWatch([...watchList, { id: id, image: image }])
    }
  }

  const deleteFav = (id: number) => {
    const newList = favList.filter((item: List) => item.id !== id)
    updateFav(newList)
  }

  const deleteWatch = (id: number) => {
    const newList = watchList.filter((item: List) => item.id !== id)
    updateWatch(newList)
  }

  const isFav = !!favList.find((item: List) => item.id === list.id)
  const isWatch = !!watchList.find((item: List) => item.id === list.id)

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
