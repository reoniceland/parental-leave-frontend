import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Login from './components/application/login'
import NavHeader from './components/navigation/NavHeader'
import Progressbar from './components/navigation/Progressbar'


const Routes = () => {
  return (
    <div className="App">
      <Router>
        <NavHeader />

        <Progressbar />

        <Switch>
          <Route path="/">
            <Login />
          </Route>

          <Route path="/asda">
            <div>Hellos</div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Routes;
