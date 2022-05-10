<template>
  <div class="register">
    <UserEmailPass pageName="Register" :nameShow=true />
    <div class="registerButton mt-3">
      <button id="register" class="btn btn-primary" @click="Register">Créer le compte</button>
    </div>
  </div>
</template>

<script>
import UserEmailPass from '@/components/UserEmailPass.vue'

export default {
  name: 'Register',
  components: {
    UserEmailPass
  },
  data () {
    return {
      email: '',
      password: '',
      name: ''
    }
  },
  methods: {
    async Register () {
      await this.$store.dispatch('authentication/register', {
        email: this.email,
        password: this.password,
        name: this.name
      })
      if (!this.authServiceError) {
        this.$router.push({
          name: 'Login'
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
