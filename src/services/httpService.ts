import axios from 'axios'
// import { getToken } from './usuarios'
// import { toast } from 'react-toastify'

// axios.defaults.headers.common['x-auth-token'] = `Bearer ${getToken()}`
axios.interceptors.response.use(undefined, (error: any) => {
  const errosEsperados =
    error.response && error.response.status >= 400 && error.status < 500

  if (!errosEsperados) {
    console.log('Erro', error)
    alert('Algo inexperado aconteceu')
  }

  return Promise.reject(error)
})

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}
