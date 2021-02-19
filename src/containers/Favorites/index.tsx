import { useLocalStorage } from 'core/hooks/useLocalStorage'
import { Link } from 'react-router-dom'

interface FavoriteList {
  id: number
  image: string
}

const FavoriteMovies = () => {
  const [storedValue, setValue] = useLocalStorage<Array<FavoriteList>>(
    'favorites',
    []
  )

  const listFavorities = storedValue.map((item) => (
    <div key={item.id} style={{ width: '200px', marginBottom: '20px' }}>
      <Link
        to={`/movie/${item.id}`}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.image}`}
          alt={item.image}
          style={{ width: '100%' }}
        />
      </Link>
    </div>
  ))

  return (
    <section style={{ margin: '100px 4% 20px' }}>
      <h1>Meu Favoritos</h1>
      <div
        style={{
          display: 'flex',
          width: '100%',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}
      >
        {storedValue && listFavorities}
      </div>
    </section>
  )
}

export default FavoriteMovies
