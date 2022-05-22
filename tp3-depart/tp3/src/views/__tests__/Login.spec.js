import { shallowMount,RouterLinkStub } from "@vue/test-utils";
import Login from '@/views/Login.vue'
import {authJsonFake} from "@/../tests/data/authJsonFake"
import flushPromises from "flush-promises";

jest.mock('@/services/authService')
jest.mock('@/shared/tokenHelper')

const store = {
    state: {
        authentication:{
            authentication: [...authJsonFake],
            OnError: false
        }
    },
    dispatch: jest.fn(),
    commit: jest.fn()
}

let auths

beforeEach(() => {
    auths = [...authJsonFake]
    jest.clearAllMocks()
})

describe('Login.vue Tests', () => {
    test('Par defaut, doit afficher le email et mot de passe vide', async () => {
        const wrapper = await LoginShallowMount()

        expect(wrapper.vm.email).toBe('')
        expect(wrapper.vm.password).toBe('')
        
    }),
    test('Si lusager clique sur le bouton connection doit appeler la méthode login', async () => {
        const wrapper = await LoginShallowMount()
        const spyLogin = jest.spyOn(wrapper.vm, 'login')
        await wrapper.find('#login').trigger('click')
        await flushPromises()

        expect(spyLogin).toHaveBeenCalled()  
    })
})

async function LoginShallowMount() {
    const pushToHome = jest.fn()
    const wrapper = shallowMount(Login, {
        mocks: {
            $store:store,
            $router: {
                push: param => pushToHome(param)
            }
        },
        stubs: {
            RouterLink:RouterLinkStub
        },
        
    })

    await flushPromises()
    return wrapper
}