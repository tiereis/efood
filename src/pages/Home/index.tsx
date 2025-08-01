import { useGetRestaurantesQuery } from '../../services/api'

import Header from '../../components/Header'
import LojaLista from '../../components/LojasLista'
import { Container } from '../../styles'
import Footer from '../../components/Footer'

import { PratoDetalhado } from '../PerfilLoja'

export type RestauranteDetalhado = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: PratoDetalhado[]
}

const Home = () => {
  const { data: lojas } = useGetRestaurantesQuery()

  if (!lojas) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Container>
        <LojaLista restaurantes={lojas || []} />
      </Container>
      <Footer />
    </>
  )
}

export default Home
