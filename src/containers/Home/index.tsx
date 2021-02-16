import { useRef } from 'react'
import { useHistory } from 'react-router-dom'

import MovieList from './MovieList'

const Home = () => {
  const inputSearch = useRef<HTMLInputElement>(null)
  const history = useHistory()

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      searchMovie()
    }
  }

  function searchMovie() {
    history.push(`/search/${inputSearch.current?.value}`)
  }

  return (
    <>
      <div>
        <input type="text" ref={inputSearch} onKeyDown={handleKeyDown} />
        <button onClick={searchMovie}>Search</button>
      </div>
      <MovieList />
    </>
  )
}

export default Home
