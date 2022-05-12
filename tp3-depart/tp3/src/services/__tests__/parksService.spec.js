import axios from 'axios'
import {parksJsonFake} from '@/../tests/data/parksJsonFake'
import {parksService} from '@/services/parkService'
import MockAdapter from 'axios-mock-adapter'

//jest.mock('axios')
var mockAxios = new MockAdapter(axios)
const API = process.env.VUE_APP_API
let parks

beforeEach(() => {
    parks = [...parksJsonFake]
    mockAxios.reset()
})