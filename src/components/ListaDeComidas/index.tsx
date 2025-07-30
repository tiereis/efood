import ComidaItem from '../Comida'
import Prato from '../models/Prato'
import { ListaDeComida } from './styles'

type Props = {
  Pratos: Prato[]
}

const ListaDeComidas = ({ Pratos }: Props) => (
  <main>
    <ListaDeComida>
      {Pratos.map((Prato) => (
        <ComidaItem
          key={Prato.id}
          imagem={Prato.imagem}
          descricaoPrato={Prato.descricaoPrato}
          nomePrato={Prato.nomePrato}
        />
      ))}
    </ListaDeComida>
  </main>
)

export default ListaDeComidas
