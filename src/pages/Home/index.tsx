import { useGetRestaurantesQuery } from '../../services/api'

import { Container } from '../../styles'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import LojaLista from '../../components/LojasLista'
import Loader from '../../components/Loader'

const Home = () => {
  const { data: lojas } = useGetRestaurantesQuery()

  if (!lojas) {
    return <Loader />
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
