import React from 'react'
import Text from '../../common/Text'
import Container from '../../common/Container'

import './styles.scss'

export default function Progressbar() {
  return (
    <Container>
      <div className="progress">
        <div className="progress__header">
          <Text variant="h1">Umsókn um fæðingarorlof</Text>
          <Text variant="p">Foreldri skal sækja um greiðslur úr Fæðingarorlofssjóði sex vikum fyrir áætlaðan fæðingardag barns. Ef þú ert þegar búin að sækja um ferðu beint inn á mínar síður.</Text>
        </div>

        <div className="progressbar">
          <div className="progressbar__item active">
            <h4>1</h4>
            <h6>Innsláttur</h6>
          </div>

          <div className="progressbar__group active">
            <span/>
            <span/>
            <span/>
            <span/>
            <span className="fifth"/>
            <span className="sixth"/>
          </div>

          <div className="progressbar__item">
            <h4>2</h4>
            <h6>Sækja gögn</h6>
          </div>

          <div className="progressbar__group">
            <span/>
            <span/>
            <span/>
            <span/>
            <span className="fifth"/>
            <span className="sixth"/>
          </div>

          <div className="progressbar__item">
            <h4>3</h4>
            <h6>Viðbótargögn</h6>
          </div>

          <div className="progressbar__group">
            <span/>
            <span/>
            <span/>
            <span/>
            <span className="fifth"/>
            <span className="sixth"/>
          </div>

          <div className="progressbar__item">
            <h4>4</h4>
            <h6>Greiða</h6>
          </div>
        </div>
      </div>
    </Container>
  )
}
