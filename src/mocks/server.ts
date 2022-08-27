import { setupServer, SetupServerApi } from 'msw/node'
import { handlers } from './handlers'

export const setup: SetupServerApi = setupServer(...handlers)
