import { useRef } from 'react'
import { useHistory } from 'react-router-dom'

import {
  HeaderNav,
  Wrapper,
  WrapperSearch,
  LinkItem,
  StyledInput
} from './styled'

import { Search } from '@styled-icons/evil'
import { BookmarkHeart } from '@styled-icons/boxicons-solid/BookmarkHeart'

const Header = () => {
  const inputSearch = useRef<HTMLInputElement>(null)
  const history = useHistory()

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      history.push(`/search/${inputSearch.current?.value}`)
    }
  }

  return (
    <HeaderNav>
      <Wrapper>
        <LinkItem to="/">GringoVies</LinkItem>
        <WrapperSearch>
          <StyledInput
            onFocus={(e) => (e.target.value = '')}
            setRef={inputSearch}
            onKeyDown={handleKeyDown}
            placeholder="Search movies"
          />
          <Search size="28" />
        </WrapperSearch>
        <LinkItem to="/favorites" className="column">
          <BookmarkHeart size="29" />
        </LinkItem>
      </Wrapper>
    </HeaderNav>
  )
}

export default Header
