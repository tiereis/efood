import { useEffect, useState } from 'react'

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
  const [lojas, setLojas] = useState<RestauranteDetalhado[]>([])
  useEffect(() => {
    fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setLojas(res))
  }, [])
  return (
    <>
      <Header />
      <Container>
        <LojaLista restaurantes={lojas} />
      </Container>
      <Footer />
    </>
  )
}

export default Home
