class Restaurante {
  id: number
  imagem: string
  titulo: string
  nota: string
  descricao: string
  categoria: string
  destaque?: boolean

  constructor(
    id: number,
    imagem: string,
    titulo: string,
    nota: string,
    descricao: string,
    categoria: string,
    destaque?: boolean
  ) {
    this.id = id
    this.imagem = imagem
    this.titulo = titulo
    this.nota = nota
    this.descricao = descricao
    this.categoria = categoria
    this.destaque = destaque
  }
}

export default Restaurante
