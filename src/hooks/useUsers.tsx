import { useEffect, useState } from 'react'
import { getUsuarioLogado, logout } from '../services/users'

export default function useUsers() {
  const [usuarioLogado, setUsuarioLogado] = useState('')

  async function logoutFunction() {
    try {
      logout()
      alert('Logout efetuado com sucesso')
    } catch (error) {
      alert('Logout não efetuado')
    }
  }

  useEffect(() => {
    const { usuario } = getUsuarioLogado()
    setUsuarioLogado(usuario)
  }, [])

  return [usuarioLogado, logoutFunction]
}
