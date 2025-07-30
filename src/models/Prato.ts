class Prato {
  id: number
  imagem: string
  nomePrato: string
  descricaoPrato: string

  constructor(
    id: number,
    imagem: string,
    nomePrato: string,
    descricaoPrato: string
  ) {
    this.id = id
    this.imagem = imagem
    this.nomePrato = nomePrato
    this.descricaoPrato = descricaoPrato
  }
}

export default Prato
