import { Switch, Route } from 'react-router-dom'

import Header from 'containers/Header'
import Home from 'containers/Main'
import Movie from 'containers/Movie'

export const Routes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/movie/:id" exact component={Movie} />
        <Route path="/gringovies/:page?/:query?" exact component={Home} />
      </Switch>
    </>
  )
}
