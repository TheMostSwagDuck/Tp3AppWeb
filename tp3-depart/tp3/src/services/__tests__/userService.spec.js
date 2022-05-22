import axios from 'axios'
import {usersJsonFake} from '@/../tests/data/usersJsonFake'
import {userService} from '@/services/userService'
import MockAdapter from 'axios-mock-adapter'

//jest.mock('axios')
var mockAxios = new MockAdapter(axios)
const API = process.env.VUE_APP_API
let users

beforeEach(() => {
    users = [...usersJsonFake]
    mockAxios.reset()
})

describe('userService.js Tests', () =>{
    test('getUserById retourne le user avec son id', async () =>{
        let user = users[0]
        mockAxios.onGet(`${API}/users/0`).reply(200, user)
        const response = await userService.getUserById(0)
        expect(response).toStrictEqual(user)
    }),
    test('likeTrail retourne le code 200', async () =>{
        mockAxios.onPost(`${API}/api/likes`).reply(200)
        const response = await userService.likeTrail(1,1)
        expect(response).toEqual(200)
    }),
    test('dislikeTrail retourne le code 200', async () =>{
        mockAxios.onDelete(`${API}/api/likes/1`).reply(200)
        const response = await userService.likeTrail(1)
        expect(response).toEqual(200)
    })
})