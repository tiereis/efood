import {
  Capa,
  Container,
  NomeRestaurante,
  Paragrafo,
  Section,
  Transparente
} from './styles'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const HeaderPerfil = () => (
  <header>
    <Section>
      <p>Restaurantes</p>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <p>0 produtos no carrinho</p>
    </Section>
    <Capa>
      <Transparente />
      <Container>
        <Paragrafo>Italiana</Paragrafo>
        <NomeRestaurante>La Dolce Vita Trattoria</NomeRestaurante>
      </Container>
    </Capa>
  </header>
)

export default HeaderPerfil
