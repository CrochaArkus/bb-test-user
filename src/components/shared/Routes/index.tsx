import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { Flyers } from '../../../views/Flyers'
import { Postcards } from '../../../views/Postcards'
import { NotFound } from '../../../views/NotFound'




export const Routes = () => {
  return (
    <Router>  
      <Switch>
      <Route exact={true} path="/">
          <Flyers />
        </Route>
        <Route exact={true} path="/flyers">
          <Flyers />
        </Route>
        <Route exact={true} path="/postcards">
          <Postcards />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}