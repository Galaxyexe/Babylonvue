<template>
  <div>
    <Navbar />
    <div id="login">
      <h1>Login</h1>
      <input type="text" name="username" v-model="input.username" placeholder="Username" />
      <input type="password" name="password" v-model="input.password" placeholder="Password" />
      <button type="button" v-on:click="login()">Login</button>
    </div>
  </div>
</template>

<script>
// import Joi from 'joi-browser';
import * as auth from './common/authentication'
export default {
  name: 'Login',
  data () {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.input.username !== '' && this.input.password !== '') {
        auth.login(this.input.username, this.input.password)
      } else {
      }
    }
  }
}
</script>

<style scoped>
#login {
  width: 50%;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 25%;
  padding: 20px;
}
</style>
