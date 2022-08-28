import { useState, useEffect } from 'react'
import { Produto } from '../types/produto'

export default function useCarrinho() {
  const [produtosCarrinho, setProdutosCarrinho] = useState<Produto[]>(
    () => JSON.parse(localStorage.getItem('produtos') || '') || [],
  )

  useEffect(() => {
    localStorage.setItem('produtos', JSON.stringify(produtosCarrinho))
  }, [produtosCarrinho])

  const adicionaCarrinho = (obj: Produto) => {
    setProdutosCarrinho((prevState) => [obj, ...prevState])
    alert('Produto adicionado ao carrinho')
  }

  const removerCarrinho = (id: number) => {
    const novoCarrinho = produtosCarrinho.filter((produto) => produto.id !== id)
    setProdutosCarrinho(novoCarrinho)
    alert('Produto removido')
  }

  return [produtosCarrinho, adicionaCarrinho, removerCarrinho]
}
