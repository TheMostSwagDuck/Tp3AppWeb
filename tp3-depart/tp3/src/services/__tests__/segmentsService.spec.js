import axios from 'axios'
import {segmentsJsonFake} from '@/../tests/data/segmentsJsonFake'
import {segmentsService} from '@/services/segmentService'
import MockAdapter from 'axios-mock-adapter'

//jest.mock('axios')
var mockAxios = new MockAdapter(axios)
const API = process.env.VUE_APP_API
let segments

beforeEach(() => {
    segments = [...segmentsJsonFake]
    mockAxios.reset()
})