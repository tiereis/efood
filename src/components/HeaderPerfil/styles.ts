import styled from 'styled-components'
import HeroHeader from '../../assets/images/HeroHeader.svg'
import imagemdecapa from '../../assets/images/imagemdecapa.png'

export const Section = styled.section`
  display: flex;
  height: 186px;
  align-items: center;
  justify-content: space-around;
  background-image: url(${HeroHeader});
`

export const Capa = styled.div`
  width: 100%;
  height: 280px;
  background-image: url(${imagemdecapa});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  color: #fff;
`

export const Transparente = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`

export const Container = styled.div`
  padding: 25px 0 32px 170px;
`

export const Paragrafo = styled.p`
  font-size: 32px;
  font-weight: 100;
  margin-bottom: 156px;
`
export const NomeRestaurante = styled.h2`
  position: absolute;
  z-index: 1;
  font-size: 32px;
  font-weight: 900;
`
