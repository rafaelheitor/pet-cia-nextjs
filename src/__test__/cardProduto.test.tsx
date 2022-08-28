import { render, screen } from '@testing-library/react'
import CardProduto from '../components/CardProduto'

describe('Tests CardProduto component', () => {
  const produto = {
    id: 1,
    nome: 'Ração premium filhote',
    descricao: 'Descrição do produto',
    valor: 150,
    categoria: 'Alimentação',
    estoque: 20,
    imagem_produto: 'https://static.petz.com.br/fotos/1630012033940.jpg',
  }

  it('should render the card', () => {
    render(
      <CardProduto
        id={produto.id}
        nome={produto.nome}
        descricao={produto.descricao}
        imagem_produto={produto.imagem_produto}
        categoria={produto.categoria}
        estoque={produto.estoque}
        valor={produto.valor}
      />,
    )

    screen.debug()
  })
})
