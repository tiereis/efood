import Button from '../Button'
import { Card, ComidaDescricao, ComidaFoto, ComidaNome } from './styles'

type Props = {
  imagem: string
  nomePrato: string
  descricaoPrato: string
}

const ComidaItem = ({ imagem, nomePrato, descricaoPrato }: Props) => (
  <Card>
    <ComidaFoto src={imagem} alt={descricaoPrato} />
    <ComidaNome>{nomePrato}</ComidaNome>
    <ComidaDescricao>{descricaoPrato}</ComidaDescricao>
    <Button type="button" title="clique e adicione sua comida">
      Adicionar ao carrinho
    </Button>
  </Card>
)

export default ComidaItem
