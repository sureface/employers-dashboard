import { defineStore } from 'pinia'
import axios from "axios";
import {useRouter} from "vue-router";


const BASE_URL = import.meta.env.VITE_BASE_PATH

console.log(BASE_URL)

export const useUserStore = defineStore('user', {
    state: () => ({
        isAuthenticated: false,
        error: '',
        router: useRouter()
    }),
    actions: {
        async login(username, password) {

            const headers = {
                'Content-Type': 'application/json',
            }

            const data = {
                username,
                password
            }
            try {
                const res = await axios.post(BASE_URL + 'api/Authentication/login',
                    data, {headers: headers})
                const TOKEN = res.data
                localStorage.setItem('TOKEN', TOKEN)
                this.isAuthenticated = true
            } catch (error) {
                this.error = error.message
            }


        },
        logout() {
            localStorage.clear()
            this.isAuthenticated = false
            this.router.push('/')
        },
    }
})