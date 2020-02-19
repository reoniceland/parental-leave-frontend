import React from 'react'
import NavHeader from './components/navigation/NavHeader'

import './scss/App.scss'
import Container from './components/common/Container'

const App = () => {
  return (
    <div className="App">
      <NavHeader />
      <Container>
        <div>bleh</div>
      </Container>
    </div>
  );
}

export default App;