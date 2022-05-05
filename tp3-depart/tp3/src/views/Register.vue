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
  }
}
</script>
