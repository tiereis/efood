import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/HeaderPerfil'
import ListaDeComidas from '../../components/ListaDeComidas'
import Prato from '../../components/models/Prato'
import { Container } from '../../styles'

import pizza from '../../assets/images/pizza.png'

const pratoDetalhado: Prato[] = [
  {
    id: 1,
    imagem: pizza,
    nomePrato: 'Pizza Marguerita',
    descricaoPrato:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    imagem: pizza,
    nomePrato: 'Pizza Marguerita',
    descricaoPrato:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    imagem: pizza,
    nomePrato: 'Pizza Marguerita',
    descricaoPrato:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    imagem: pizza,
    nomePrato: 'Pizza Marguerita',
    descricaoPrato:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    imagem: pizza,
    nomePrato: 'Pizza Marguerita',
    descricaoPrato:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    imagem: pizza,
    nomePrato: 'Pizza Marguerita',
    descricaoPrato:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const PerfilLoja = () => (
  <>
    <HeaderPerfil />
    <Container>
      <ListaDeComidas Pratos={pratoDetalhado} />
    </Container>
    <Footer />
  </>
)

export default PerfilLoja
