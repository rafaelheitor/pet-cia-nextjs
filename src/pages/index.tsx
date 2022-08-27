import { NextPage } from 'next'
import CardProduto from '../components/CardProduto'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getProdutos } from '../services/produtos'

type props = {
  data: {
    id: number
    nome: string
    descricao: string
    valor: number
    categoria: string
    estoque: number
    imagem_produto: string
  }[]
}

export async function getServerSideProps() {
  const listaDeProdutos = await getProdutos()
  return {
    props: {
      data: listaDeProdutos,
    },
  }
}

const Page: NextPage<props> = ({ data }) => {
  const names = data.map((produto) => (
    <CardProduto
      key={produto.id}
      id={produto.id}
      valor={produto.valor}
      descricao={produto.descricao}
      categoria={produto.categoria}
      estoque={produto.estoque}
      nome={produto.nome}
      imagem={produto.imagem_produto}
    />
  ))
  return (
    <>
      <Header />
      <div className="catalogo">{names}</div>
      <Footer />
    </>
  )
}

export default Page
