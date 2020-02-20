import React from 'react'

import './styles.scss'


interface Props {
  children: React.ReactNode
}

export default function FormCard({
  children,
}: Props) {
  return (
    <div className="form-card">
      <div className="form-card__container">
        {children}
      </div>
    </div>
  )
}
