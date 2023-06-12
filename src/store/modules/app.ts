import {defineStore} from "pinia";
import { store } from "../index";


interface AppState {
    collapse: Boolean,
}

export const useAppStore = defineStore('app', {
    state: (): AppState => {
        return {
            collapse: false,
        }
    },
    getters: {
        getCollapse() {
            return this.collapse
        },
    },
    actions: {
        setCollapse() {
            this.collapse = !this.collapse
        },
    }
})

export const useAppStoreWithOut = () => {
    return useAppStore(store)
}