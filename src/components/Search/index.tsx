import { useRef } from 'react'
import { useHistory } from 'react-router-dom'

const Search = () => {
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
      <input type="text" ref={inputSearch} onKeyDown={handleKeyDown} />
      <button onClick={searchMovie}>Search</button>
    </>
  )
}

export default Search
