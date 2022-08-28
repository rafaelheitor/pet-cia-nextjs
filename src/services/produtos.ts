import { SetStateAction } from 'react'
import httpService from './httpService'
// import { apiEndpoint } from '../config.json'
import { Produto } from '../types/produto'

const produtosEndpoint = '/produtos'
const apiEndpoint = 'http://localhost:4000'

export async function getProdutos() {
  try {
    const { data } = await httpService.get(apiEndpoint + produtosEndpoint)
    const { listaDeProdutos } = data
    return listaDeProdutos
  } catch (error) {}
}

export function createProduto(data: Produto) {
  return httpService.post(apiEndpoint + produtosEndpoint + '/novo', data)
}
export function deleteProduto(id: number) {
  return httpService.delete(apiEndpoint + produtosEndpoint + `/deletar/${id}`)
}
export async function infoProduto(id: number): Promise<Produto | undefined> {
  try {
    const { data } = await httpService.get(
      apiEndpoint + produtosEndpoint + `/detalhe/${id}`,
    )
    const { produto } = data
    return produto
  } catch (error) {}
}
