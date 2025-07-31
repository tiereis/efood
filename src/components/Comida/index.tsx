import Button from '../Button'
import { Card, ComidaDescricao, ComidaFoto, ComidaNome } from './styles'

type Props = {
  imagem: string
  nomePrato: string
  descricaoPrato: string
  onClick: () => void
}

const ComidaItem = ({ imagem, nomePrato, descricaoPrato, onClick }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 129) {
      return descricao.slice(0, 129) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <ComidaFoto src={imagem} alt={descricaoPrato} />
      <ComidaNome>{nomePrato}</ComidaNome>
      <ComidaDescricao>{getDescricao(descricaoPrato)}</ComidaDescricao>
      <Button
        onClick={onClick}
        type="button"
        title="clique e adicione sua comida"
      >
        Mais Detalhes
      </Button>
    </Card>
  )
}

export default ComidaItem
