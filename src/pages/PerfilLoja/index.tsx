import { useParams } from 'react-router-dom'

import { useGetPerfilQuery } from '../../services/api'

import { Container } from '../../styles'
import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/HeaderPerfil'
import ListaDeComidas from '../../components/ListaDeComidas'
import Cart from '../../components/Cart'
export type PratoDetalhado = {
  id: number
  preco: number
  foto: string
  nome: string
  descricao: string
  porcao: string
}

const PerfilLoja = () => {
  const { id } = useParams<{ id: string }>()

  const { data: restaurante, isLoading } = useGetPerfilQuery(id || '')
  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (!restaurante) {
    return <div>Restaurante não encontrado.</div>
  }

  const prato = restaurante.cardapio

  return (
    <>
      <HeaderPerfil heroBanner={restaurante} />
      <Container>
        <ListaDeComidas Pratos={prato} />
      </Container>
      <Cart />
      <Footer />
    </>
  )
}

export default PerfilLoja
