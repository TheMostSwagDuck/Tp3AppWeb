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