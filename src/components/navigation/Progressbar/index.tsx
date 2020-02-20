import React from 'react'
import { useHistory } from 'react-router-dom'

import Text from '../../common/Text'
import Container from '../../common/Container'

import './styles.scss'

interface Props {
  current?: string
  children: React.ReactNode
}

export default function Progressbar({
  children,
}: Props) {
  const history = useHistory()
  const path = history.location.pathname

  return (
    <Container>
      <div className="progressbar">
        <div className="progressbar__header">
          <Text variant="h1">Umsókn um fæðingarorlof</Text>
          <Text variant="p">Foreldri skal sækja um greiðslur úr Fæðingarorlofssjóði sex vikum fyrir áætlaðan fæðingardag barns. Ef þú ert þegar búin að sækja um ferðu beint inn á mínar síður.</Text>
        </div>

        <div className="progressbar__container">
          <div className={`progressbar__item ${path === '/' ? 'active' : 'active done'}`}>
            <h4>1</h4>
            <h6>Innskráning</h6>
          </div>

          <div className={`progressbar__group${path === '/step1' ? ' active' : ''}${path === '/step2' || path === '/step3' ? ' active done' : ''}`}>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
          </div>

          <div className={`progressbar__item${path === '/step1' ? ' active' : ''}${path === '/step2' || path === '/step3' ? ' active done' : ''}`}>
            <h4>2</h4>
            <h6>Sækja gögn</h6>
          </div>

          <div className={`progressbar__group${path === '/step2' ? ' active' : ''}${path === '/step3' ? ' active done' : ''}`}>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
          </div>

          <div className={`progressbar__item${path === '/step2' ? ' active' : ''}${path === '/step3' ? ' active done' : ''}`}>
            <h4>3</h4>
            <h6>Reiknivél</h6>
          </div>

          <div className={`progressbar__group${path === '/step3' ? ' active done' : ''}`}>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
          </div>

          <div className={`progressbar__item${path === '/step3' ? ' active' : ''}`}>
            <h4>4</h4>
            <h6>Greiðslupplýsingar</h6>
          </div>
        </div>
      </div>

      {children}
    </Container>
  )
}
