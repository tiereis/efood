import Button from '../Button'
import Tag from '../Tag'
import {
  CardLoja,
  Container,
  ContainerAvaliacao,
  ContainerCabecalho,
  ContainerTag,
  Descricao,
  ImagemCapa,
  NotaAvaliacao,
  Titulo
} from './styles'

type Props = {
  imagem: string
  titulo: string
  nota: string
  descricao: string
  categoria: string
  destaque?: boolean
}

import StarIcon from '../../assets/icons/StarIcons.svg'

const Lojas = ({
  imagem,
  titulo,
  nota,
  descricao,
  categoria,
  destaque = false
}: Props) => (
  <CardLoja>
    <ImagemCapa style={{ backgroundImage: `url(${imagem})` }}>
      <ContainerTag>
        {destaque && <Tag size="big">Destaque da semana</Tag>}
        <Tag>{categoria}</Tag>
      </ContainerTag>
    </ImagemCapa>
    <Container>
      <ContainerCabecalho>
        <Titulo>{titulo}</Titulo>
        <ContainerAvaliacao>
          <NotaAvaliacao>{nota}</NotaAvaliacao>
          <img src={StarIcon} alt="icone estrela" />
        </ContainerAvaliacao>
      </ContainerCabecalho>
      <Descricao>{descricao}</Descricao>
      <Button
        to="/restaurante"
        type="link"
        title="Clique aqui e conheca a loja"
      >
        Saiba mais
      </Button>
    </Container>
  </CardLoja>
)

export default Lojas
