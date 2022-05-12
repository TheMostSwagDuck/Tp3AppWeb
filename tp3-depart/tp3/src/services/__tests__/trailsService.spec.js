import axios from 'axios'
import {trailsJsonFake} from '@/../tests/data/trailsJsonFake'
import {trailsService} from '@/services/trailService'
import MockAdapter from 'axios-mock-adapter'

//jest.mock('axios')
var mockAxios = new MockAdapter(axios)
const API = process.env.VUE_APP_API
let trails

beforeEach(() => {
    trails = [...trailsJsonFake]
    mockAxios.reset()
})