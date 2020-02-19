import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import NavHeader from './components/navigation/NavHeader'
import Progressbar from './components/navigation/Progressbar'


const App = () => {
  return (
    <div className="App">
      <Router>
        <NavHeader />

        <Switch>
          <Route path="/">
            <Progressbar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
