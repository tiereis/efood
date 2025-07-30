import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import { FooterSection, Logo, Paragrafo, RedesContainer } from './styles'

const Footer = () => (
  <FooterSection>
    <Logo src={logo} />
    <RedesContainer>
      <img src={instagram} alt="Logo instagram" />
      <img src={facebook} alt="Logo FaceBook" />
      <img src={twitter} alt="Logo Twitter (Passarinho)" />
    </RedesContainer>
    <Paragrafo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Paragrafo>
  </FooterSection>
)

export default Footer
