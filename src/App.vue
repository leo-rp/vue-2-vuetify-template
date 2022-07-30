<template>
  <v-app>
    <v-main>     
      <Login/>
      <ForgotPassword/>
      <Register/>
    </v-main>
  </v-app>
</template>


<script>
import Login from './components/Login.vue';
import ForgotPassword from './components/ForgotPassword.vue';
import Register from './components/Register.vue';

export default {
  name: 'App',

  components: {
    Login,  
    ForgotPassword, 
    Register
  },

  data: () => ({
    //
  }),
};
</script>
