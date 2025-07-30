import { Hero, LogoImg, SubTitulo } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <Hero>
    <LogoImg src={logo} alt="EFOOD" />
    <SubTitulo>
      Viva experiências gastronômicas no conforto da sua casa
    </SubTitulo>
  </Hero>
)

export default Header
