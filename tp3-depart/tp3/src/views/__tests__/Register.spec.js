import { shallowMount,RouterLinkStub } from "@vue/test-utils";
import Register from '@/views/Register.vue'
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

describe('Register.vue Tests', () => {
    test('Par defaut, doit afficher le email, mot de passe et nom est vide', async () => {
        const wrapper = await RegisterShallowMount()

        expect(wrapper.vm.email).toBe('')
        expect(wrapper.vm.password).toBe('')
        expect(wrapper.vm.name).toBe('')
        
    }),
    test('Si lusager clique sur le bouton créer le compte doit appeler la méthode register', async () => {
        const wrapper = await RegisterShallowMount()
        const spyRegister = jest.spyOn(wrapper.vm, 'register')
        await wrapper.find('#register').trigger('click')
        await flushPromises()

        expect(spyRegister).toHaveBeenCalled()  
    })
})

async function RegisterShallowMount() {
    const pushToLogin = jest.fn()
    const wrapper = shallowMount(Register, {
        mocks: {
            $store:store,
            $router: {
                push: param => pushToLogin(param)
            }
        },
        stubs: {
            RouterLink:RouterLinkStub
        },
        
    })

    await flushPromises()
    return wrapper
}