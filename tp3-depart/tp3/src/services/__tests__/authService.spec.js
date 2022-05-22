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
        const credential = {
            email: "email",
            password: "password"
        }
        mockAxios.onPost(`${API}/login`).reply(200,1)
        const response = await authService.getToken(credential)
        expect(response).toEqual(1)
    }),
    test("PostUser doit retourner code 200", async () =>{
        const user = {
            email:"email",
            password:"pass",
            nom:"nom"
        }
        mockAxios.onPost(`${API}/register`).reply(200)
        const response = await authService.postUser(user)
        expect(response).toEqual(200)
        
    })
})