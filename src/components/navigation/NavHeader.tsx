import React from 'react'
import Container from '../common/Container'
import './NavHeader.scss'

export default function NavHeader() {

  return (
    <div className="nav-header">
      <Container>
        <div className="van-maincontainer">
          <nav>
            <a className="logo" href="#">island.is</a>
            <div className="filler"></div>
            <a className="submissions" href="">Mínar umsóknir</a>
            <a className="logout" href="">Útskráning</a>
          </nav>
        </div>
      </Container>
    </div>
  )
}
