import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.main`
  max-width: 320px;
  width: 100%;
  margin-top: 56px;
  padding: 8px;
  background-color: ${cores.corPrincipal};
  color: #fff;
`

export const ComidaFoto = styled.img`
  margin: 0 auto;
`

export const ComidaNome = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-top: 8px;
`

export const ComidaDescricao = styled.p`
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
`
