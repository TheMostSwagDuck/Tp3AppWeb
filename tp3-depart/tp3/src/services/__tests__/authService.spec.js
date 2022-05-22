import axios from 'axios'
import {authJsonFake} from '@/../tests/data/authJsonFake'
import {authService} from '@/services/authService'
import MockAdapter from 'axios-mock-adapter'

//jest.mock('axios')
var mockAxios = new MockAdapter(axios)
const API = process.env.VUE_APP_API
let auths

beforeEach(() => {
    auths = [...authJsonFake]
    mockAxios.reset()
})

describe('authService.js tests', () => {
    test("getToken doit retourner le token", async () => {
        mockAxios.onGet(`${API}/login`).reply(200,)
    })
})