import React, { useState, useEffect } from 'react'
import { getProdutos } from '../services/produtos'
import { Produto } from '../types/produto'

export default function useProdutos() {
  const [apiData, setApiData] = useState<Produto[]>([])

  const fetchProdutos = async () => {
    try {
      const produtos = await getProdutos()
      setApiData(produtos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProdutos()
  }, [])

  return apiData
}
