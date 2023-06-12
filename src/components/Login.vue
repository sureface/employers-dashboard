<template>
  <div class="Login_Page h-screen w-screen grid grid-cols-2 gap-10 p-10">
    <div class="flex item-center justify-center">
      <img src="../assets/img/dashboard-png.png" alt="err" class="object-contain">
    </div>
    <div class="flex items-center justify-center">
      <div>

        <h1 class="text-center mb-4 font-semibold text-4xl text-gray-600">Login Page</h1>
        <div class="py-7 px-10 glass_bg">
          <form @submit.prevent="handleLogin">
            <div class="flex flex-col">
              <label for="username" class="mb-1">Username:</label>
              <input type="text" id="username" name="username" v-model="username" class="px-2 py-1 border border-black rounded-lg focus:outline-none outline-none" required>
            </div>
            <div class="flex flex-col">
              <label for="password" class="mb-1">Password:</label>
              <input type="password" id="password" name="password" v-model="password" class="px-2 py-1 border border-black rounded-lg focus:outline-none outline-none" required>
            </div>
            <div class="flex items-center justify-end mt-3">
              <button type="submit" class="px-3 py-1 rounded-xl bg-blue-500 text-white text-xl font-semibold">Login</button>
            </div>
            <hr class="my-3">
            <div class="text-center text-gray-500 text-md">
              you dont have any account ? <router-link to="/sign-up" class="text-blue-600">create now</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../store/user.js'

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      const userStore = useUserStore()

      userStore.login(this.username, this.password)
          .then(() => {
            this.$router.push('/dashboard')
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }
}
</script>