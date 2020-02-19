import React from 'react'
import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'

import Container from '../../common/Container'

import './styles.scss'

const PERSON = gql`
{
  person(kennitala: "0000") {
    name
    address
    can_calculate
  }
}`

export default function NavHeader() {
  const { data } = useQuery(PERSON)
  console.log(data)
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
