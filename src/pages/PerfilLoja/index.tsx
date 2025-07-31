import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Container } from '../../styles'
import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/HeaderPerfil'
import ListaDeComidas from '../../components/ListaDeComidas'
import { RestauranteDetalhado } from '../Home'

export type PratoDetalhado = {
  id: number
  preco: number
  foto: string
  nome: string
  descricao: string
  porcao: string
}

const PerfilLoja = () => {
  const [prato, setPrato] = useState<PratoDetalhado[]>([])
  const [restaurante, setRestaurante] = useState<RestauranteDetalhado | null>(
    null
  )
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res: RestauranteDetalhado) => {
        setRestaurante(res)
        setPrato(res.cardapio)
      })
  }, [id])
  if (!restaurante) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <HeaderPerfil heroBanner={restaurante} />
      <Container>
        <ListaDeComidas Pratos={prato} />
      </Container>
      <Footer />
    </>
  )
}

export default PerfilLoja
