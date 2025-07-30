import Header from '../../components/Header'
import LojaLista from '../../components/LojasLista'
import Restaurnate from '../../components/models/Restaurante'
import { Container } from '../../styles'

import sushi from '../../assets/images/sushi.png'
import massa from '../../assets/images/massa.png'
import Footer from '../../components/Footer'

const restauranteDetalhado: Restaurnate[] = [
  {
    id: 1,
    imagem: sushi,
    destaque: true,
    categoria: 'Japonesa',
    titulo: 'Hioki Sushi ',
    nota: '4.9',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    imagem: massa,
    categoria: 'Italiana',
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    imagem: massa,
    categoria: 'Italiana',
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    imagem: massa,
    categoria: 'Italiana',
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    imagem: massa,
    categoria: 'Italiana',
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    imagem: massa,
    categoria: 'Italiana',
    titulo: 'La Dolce Vita Trattoria',
    nota: '4.6',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]
const Home = () => (
  <>
    <Header />
    <Container>
      <LojaLista restaurantes={restauranteDetalhado} />
    </Container>
    <Footer />
  </>
)

export default Home
