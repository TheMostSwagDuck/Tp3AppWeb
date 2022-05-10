<template>
  <div class="login">
    <UserEmailPass pageName="Login" :nameShow=false />
    <div class="loginButton mt-4 w-75">
      <button id="login" class="btn btn-primary" @click="Login">Se Connecter</button>
      <router-link class="nav-link active" v-bind:to="{ name: 'Register'}">Créer un compte</router-link>
    </div>
  </div>
</template>

<script>
import UserEmailPass from '@/components/UserEmailPass.vue'

export default {
  name: 'Login',
  created () {
    this.$store.commit('authentification/clearError')
  },
  components: {
    UserEmailPass
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async Login () {
      await this.$store.dispatch('authentication/login', {
        email: this.email,
        password: this.password
      })
      if (!this.authServiceError) {
        this.$router.push({
          name: 'Home'
        })
      }
    }
  },
  computed: {
    authServiceError () {
      return this.$store.state.authentication.authServiceError
    }
  }
}
</script>
