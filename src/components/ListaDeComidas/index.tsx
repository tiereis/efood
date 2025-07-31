import { useState } from 'react'

import Button from '../Button'
import ComidaItem from '../Comida'
import {
  BotaoFechar,
  Descricao,
  ImageModal,
  ListaDeComida,
  Modal,
  ModalContent,
  NomeComida
} from './styles'

import fechar from '../../assets/images/close.png'
import { PratoDetalhado } from '../../pages/PerfilLoja'

type Props = {
  Pratos: PratoDetalhado[]
}

const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ListaDeComidas = ({ Pratos }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] =
    useState<PratoDetalhado | null>(null) // Novo estado para o prato selecionado

  const abrirModal = (prato: PratoDetalhado) => {
    setPratoSelecionado(prato)
    setModalEstaAberto(true)
  }

  const fecharModal = () => {
    setModalEstaAberto(false)
    setPratoSelecionado(null) // Limpa o prato selecionado ao fechar o modal
  }

  return (
    <main>
      <ListaDeComida>
        {Pratos.map((Prato) => (
          <ComidaItem
            key={Prato.id}
            imagem={Prato.foto}
            descricaoPrato={Prato.descricao}
            nomePrato={Prato.nome}
            onClick={() => abrirModal(Prato)} // Adiciona um onClick para abrir o modal com o prato certo
          />
        ))}
      </ListaDeComida>

      {/* O modal só é renderizado se estiver aberto E se houver um prato selecionado */}
      {modalEstaAberto && pratoSelecionado && (
        <Modal className={modalEstaAberto ? 'visivel' : ''}>
          <ModalContent>
            <BotaoFechar src={fechar} onClick={fecharModal} />
            <ImageModal src={pratoSelecionado.foto} />
            <div>
              <NomeComida>{pratoSelecionado.nome}</NomeComida>
              <Descricao>
                {pratoSelecionado.descricao}
                <span>{pratoSelecionado.porcao}</span>
              </Descricao>
              <Button type="button" title="Clique aqui e adicione">
                Adicionar ao carrinho - {formataPreco(pratoSelecionado.preco)}
              </Button>
            </div>
          </ModalContent>
          <div onClick={fecharModal} className="overlay"></div>
        </Modal>
      )}
    </main>
  )
}

export default ListaDeComidas
