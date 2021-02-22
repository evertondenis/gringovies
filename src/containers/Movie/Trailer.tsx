import { useState } from 'react'
import { useFetch } from 'core/hooks/useFetch'
import ReactPlayer from 'react-player/youtube'
import { getTrailer } from 'core/providers'

import { Button, Modal } from 'components/index'

const MovieTrailer = ({ id }: any) => {
  const { data, isLoading } = useFetch(getTrailer(id))
  const [show, setShowModal] = useState<boolean>(false)

  const renderButton = () => {
    const trailer = data.results.find((item: any) => item.type === 'Trailer')
    const disabled = !trailer || false

    return (
      <>
        <Button disabled={disabled} onClick={() => setShowModal(true)}>
          Trailer
        </Button>
        <Modal show={show} onClose={() => setShowModal(false)}>
          <ReactPlayer
            width="100%"
            playing
            url={`https://www.youtube.com/watch?v=${trailer?.key}`}
          />
        </Modal>
      </>
    )
  }

  return <>{data && !isLoading && renderButton()}</>
}

export default MovieTrailer
