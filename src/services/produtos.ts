import httpService from './httpService'
// import { apiEndpoint } from '../config.json'

interface produto {
  id: number
  nome: string
  descricao: string
  valor: number
  categoria: string
  estoque: number
  imagem_produto: string
}

const produtosEndpoint = '/produtos'
const apiEndpoint = 'http://localhost:4000'

export async function getProdutos(): Promise<produto[] | undefined> {
  try {
    const { data } = await httpService.get(apiEndpoint + produtosEndpoint)
    const { listaDeProdutos } = data
    return listaDeProdutos
  } catch (error) {}
}

export function createProduto(data: produto) {
  return httpService.post(apiEndpoint + produtosEndpoint + '/novo', data)
}
export function deleteProduto(id: number) {
  return httpService.delete(apiEndpoint + produtosEndpoint + `/deletar/${id}`)
}
export async function infoProduto(id: number): Promise<produto | undefined> {
  try {
    const { data } = await httpService.get(
      apiEndpoint + produtosEndpoint + `/detalhe/${id}`
    )
    const { produto } = data
    return produto
  } catch (error) {}
}
