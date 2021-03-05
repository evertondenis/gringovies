import { render, waitFor } from '@testing-library/react'
import { Route, MemoryRouter } from 'react-router-dom'

import Main from '../'

interface Props {
  page?: string
  query?: string
}

const renderComponent = ({ page, query }: Props) =>
  render(
    <MemoryRouter initialEntries={[`/${page}/${query}`]}>
      <Route path="/:page?/:query?">
        <Main />
      </Route>
    </MemoryRouter>
  )

describe('<Main />', () => {
  it('should render the Popular Movies Page', async () => {
    const { getByText } = renderComponent({ page: undefined } as Props)

    await waitFor(() => getByText(/Popular Movies/i))
  })

  it('should render the Favorites Page', async () => {
    const { getByText } = renderComponent({ page: 'favorites' } as Props)

    await waitFor(() => getByText(/My favorites movies/i))
  })

  it('should render the Whatchlis Page', async () => {
    const { getByText } = renderComponent({ page: 'watchlist' } as Props)

    await waitFor(() => getByText(/My watchlist of movies/i))
  })

  it('should render the Search Page', async () => {
    const { getByText } = renderComponent({
      page: 'search',
      query: 'spider'
    } as Props)

    await waitFor(() => getByText(/Results for 'spider'/i))
  })
})
