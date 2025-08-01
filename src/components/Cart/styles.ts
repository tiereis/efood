import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import lixeira from '../../assets/images/lixeira.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: none;
  justify-content: end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const SideBar = styled.aside`
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0 8px;
  background-color: ${cores.corPrincipal};
  z-index: 1;

  ${ButtonContainer} {
    width: 100%;
    height: 24px;
    padding: 0;
  }
`

export const CardItem = styled.li`
  display: flex;
  max-width: 344px;
  width: 100%;
  padding: 8px;
  background-color: ${cores.corSecundaria};
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  strong {
    font-size: 14px;
    font-weight: 400;
  }

  button {
    background-image: url(${lixeira});
    cursor: pointer;
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 74px;
    left: 320px;
  }
`

export const CardInfoContainer = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 16px;
  justify-content: space-between;
  color: ${cores.corSecundaria};

  p,
  strong {
    font-size: 14px;
    font-weight: 700;
  }
`
