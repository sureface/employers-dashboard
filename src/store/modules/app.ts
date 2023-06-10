import {defineStore} from "pinia";
import { store } from "../index";


interface AppState {
    collapse: Boolean,
    signUpModal: Boolean,
}

export const useAppStore = defineStore('app', {
    state: (): AppState => {
        return {
            collapse: false,
            signUpModal: false,
        }
    },
    getters: {
        getCollapse() {
            return this.collapse
        },
        getSignUpModal() {
            return this.signUpModal
        }
    },
    actions: {
        setCollapse() {
            this.collapse = !this.collapse
        },
        setSignUpModal(signUpModal: Boolean) {
            this.signUpModal =  signUpModal
            console.log(this.signUpModal)
        }
    }
})

export const useAppStoreWithOut = () => {
    return useAppStore(store)
}