import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Login from './components/application/login'
import Months from './components/application/months'
import Payment from './components/application/payment'
import NavHeader from './components/navigation/NavHeader'
import Progressbar from './components/navigation/Progressbar'
import Calculation from './components/application/calculation'


const Routes = () => {
  return (
    <div className="App">
      <Router>
        <NavHeader />

        <Progressbar />

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/step1" component={Months} />
          <Route exact path="/step2" component={Calculation} />
          <Route exact path="/step3" component={Payment} />
        </Switch>
      </Router>
    </div>
  )
}

export default Routes;
