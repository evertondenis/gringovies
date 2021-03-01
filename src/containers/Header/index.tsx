import { useRef } from 'react'
import { useHistory } from 'react-router-dom'

import {
  StyledHeader,
  Wrapper,
  WrapperSearch,
  LinkItem,
  StyledInput
} from './styled'

import { Search } from '@styled-icons/evil'
import { BookmarkHeart } from '@styled-icons/boxicons-solid/BookmarkHeart'
import { Bookmark } from '@styled-icons/boxicons-solid/Bookmark'

const Header = () => {
  const inputSearch = useRef<HTMLInputElement>(null)
  const history = useHistory()

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      history.push(`/search/${inputSearch.current?.value}`)
    }
  }

  return (
    <StyledHeader>
      <Wrapper>
        <LinkItem to="/gringovies">GringoVies</LinkItem>
        <WrapperSearch>
          <StyledInput
            onFocus={(e: any) => (e.target.value = '')}
            setRef={inputSearch}
            onKeyDown={handleKeyDown}
            placeholder="Search movies"
          />
          <Search size="28" title="Search movies" />
        </WrapperSearch>
        <LinkItem to="/favorites" className="column">
          <BookmarkHeart size="24" title="Favorites" />
          <p>Favorites</p>
        </LinkItem>
        <LinkItem to="/watchlist" className="column">
          <Bookmark size="24" title="Watchist" />
          <p>My List</p>
        </LinkItem>
      </Wrapper>
    </StyledHeader>
  )
}

export default Header
