import Lojas from '../Lojas'
import { ListaLoja } from './styles'

import Restaurnate from '../models/Restaurante'

type Props = {
  restaurantes: Restaurnate[]
}

const LojaLista = ({ restaurantes }: Props) => (
  <main>
    <ListaLoja>
      {restaurantes.map((restaurante) => (
        <Lojas
          key={restaurante.id}
          imagem={restaurante.imagem}
          destaque={restaurante.destaque}
          categoria={restaurante.categoria}
          titulo={restaurante.titulo}
          nota={restaurante.nota}
          descricao={restaurante.descricao}
        />
      ))}
    </ListaLoja>
  </main>
)

export default LojaLista
