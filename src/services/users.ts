import httpService from './httpService'
// import { apiEndpoint } from '../config.json'
// import jwtDecode from 'jwt-decode'
import user from '../types/users'

const usuariosEndpoint = '/users'
const apiEndpoint = 'http://localhost:4000'

export async function login(data: user['login']) {
  const { data: resposta } = await httpService.post(
    `${apiEndpoint}${usuariosEndpoint}/login`,
    data,
  )
  const { token } = resposta
  localStorage.setItem('token', JSON.stringify(token))
}

export async function registro(data: user['registro']) {
  const { data: resposta } = await httpService.post(
    `${apiEndpoint}${usuariosEndpoint}/registro`,
    data,
  )
  const { token } = resposta
  localStorage.setItem('token', JSON.stringify(token))
}

export function atualizarSenha(data) {
  httpService.put(`${apiEndpoint}${usuariosEndpoint}/eu/alterarsenha`, data)
}

export async function logout() {
  try {
    await httpService.post(
      `${apiEndpoint}${usuariosEndpoint}/eu/logout`,
      null,
      {
        withCredentials: true,
      },
    )
    localStorage.removeItem('token')
  } catch (error) {}
}

export function getUsuarioLogado() {
  try {
    const jwt = localStorage.getItem('token')
    return jwtDecode(jwt)
  } catch (error) {
    return ''
  }
}

export function getToken() {
  return localStorage.getItem('token')
}
