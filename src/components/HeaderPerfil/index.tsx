import {
  Capa,
  NomeRestaurante,
  Paragrafo,
  Section,
  Transparente
} from './styles'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { Container } from '../../styles'
import { RestauranteDetalhado } from '../../pages/Home'

type Props = {
  heroBanner: RestauranteDetalhado
}

const HeaderPerfil = ({ heroBanner }: Props) => (
  <header>
    <Section>
      <div>
        <p>Restaurantes</p>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <p>0 produtos no carrinho</p>
      </div>
    </Section>
    <Capa style={{ backgroundImage: `url(${heroBanner.capa})` }}>
      <Transparente />
      <Container>
        <Paragrafo>{heroBanner.tipo}</Paragrafo>
        <NomeRestaurante>{heroBanner.titulo}</NomeRestaurante>
      </Container>
    </Capa>
  </header>
)

export default HeaderPerfil
