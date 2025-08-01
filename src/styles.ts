import styled, { createGlobalStyle } from 'styled-components'

export const breakPoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const cores = {
  corDeFundo: '#FFF8F2',
  corPrincipal: '#E66767',
  corSecundaria: '#FFEBD9'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${cores.corDeFundo};
    color: ${cores.corPrincipal};
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  background-color: ${cores.corDeFundo};

  @media (max-width: ${breakPoints.desktop}) {
    width: 90%;
  }
`
