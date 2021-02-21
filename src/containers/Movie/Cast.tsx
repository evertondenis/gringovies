import { useFetch } from 'core/hooks/useFetch'
import { getCast } from 'core/providers'

import Trailer from './Trailer'

import { Casting } from './styled'

const MovieCast = ({ id }: any) => {
  const { data, isLoading } = useFetch(getCast(id))

  const getCasting = (cast: any) => {
    const topFive = cast.slice(0, 6).map((item: any) => item.name)
    return <span>{topFive.join(', ')}</span>
  }

  const getDirector = (crew: any) => {
    const director = crew.find((item: any) => item.job === 'Director')
    if (director?.name) {
      return <span>{director.name}</span>
    }
  }

  return (
    <>
      {data && !isLoading && (
        <>
          <Casting>
            <span>Cast:</span>
            {getCasting(data.cast)}
          </Casting>
          <Casting>
            <span>Direction:</span>
            {getDirector(data.crew)}
          </Casting>
          <Casting>
            <Trailer id={id} />
            {/* <button>Trailler</button> */}
          </Casting>
        </>
      )}
    </>
  )
}
export default MovieCast
