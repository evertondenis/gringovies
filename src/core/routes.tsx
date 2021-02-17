import { Switch, Route } from 'react-router-dom'

import Header from 'containers/Header'

import Home from 'containers/Main'
import Movie from 'containers/Movie'
import FavoritesMovies from 'containers/Favorites'
import SearchPage from 'containers/Search'

export const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" exact component={Movie} />
        <Route path="/favorites" exact component={FavoritesMovies} />
        <Route path="/search/:query" exact component={SearchPage} />
        <Route path="*" exact component={Home} />
      </Switch>
    </>
  )
}
