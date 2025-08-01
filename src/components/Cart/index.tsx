import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Button from '../Button'
import {
  CardInfoContainer,
  CardItem,
  CartContainer,
  Overlay,
  SideBar
} from './styles'

import { formataPreco } from '../../components/ListaDeComidas'

import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getPrecoTotal = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CardItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <strong>{formataPreco(item.preco)}</strong>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CardItem>
          ))}
        </ul>
        <CardInfoContainer>
          <p>Valor total</p>
          <strong>{formataPreco(getPrecoTotal())}</strong>
        </CardInfoContainer>
        <Button type="button" title="Clique aqui para continuar com a entrega">
          Continuar com a entrega
        </Button>
      </SideBar>
    </CartContainer>
  )
}
export default Cart
