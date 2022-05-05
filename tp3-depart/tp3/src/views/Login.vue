<template>
  <div class="login">
    <UserEmailPass pageName="Login" :nameShow=false />
    <div class="loginButton mt-3">
      <button id="login" class="btn btn-primary" @click="Login">Se Connecter</button>
      <router-link class="nav-link active" v-bind:to="{ name: 'Register'}">Créer un compte</router-link>
    </div>
  </div>
</template>

<script>
import UserEmailPass from '@/components/UserEmailPass.vue'

export default {
  name: 'Login',
  components: {
    UserEmailPass
  }
}
</script>
