import React from 'react'

import './styles.scss'


interface Props {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
  children: React.ReactNode
  className?: string
}

export default function Text({
  variant,
  children,
  className,
}: Props) {
  const TextComponent = variant

  return (
    <TextComponent
      className={`text text--${variant}${className ? ` ${className}` : ''}`}
    >
      {children}
    </TextComponent>
  )
}
