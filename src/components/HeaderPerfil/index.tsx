import { useDispatch, useSelector } from 'react-redux'
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
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

type Props = {
  heroBanner: RestauranteDetalhado
}

const HeaderPerfil = ({ heroBanner }: Props) => {
  const dispath = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const cartOpen = () => {
    dispath(open())
  }

  return (
    <header>
      <Section>
        <Container>
          <p>Restaurantes</p>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <a onClick={cartOpen}>{items.length} produto(s) no carrinho</a>
        </Container>
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
}
export default HeaderPerfil
