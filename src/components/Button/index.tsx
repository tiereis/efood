import { ButtonContainer, ButtonLink } from './styles'
import React from 'react' // <--- Importe React para usar React.ReactNode

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children?: React.ReactNode
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}
export default Button
