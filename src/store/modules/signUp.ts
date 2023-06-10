import { defineStore } from 'pinia'
import { store } from '../index'
import { AuthApi } from '../../api/AuthApi/index.js'
import axios from "axios";
import * as process from "process";

const baseUrl = import.meta.env.VITE_BASE_PATH;

interface signUpForm {
    createUser: {
        email: String,
        userName: String,
        password: String,
        personId: Number,
    },
    createPerson: {
        firstName: String,
        middleName: String,
        lastName: String,
        passportSeria: String,
        passportNumber: String,
        genderId: Number,
        countryId: Number,
        regionId: Number,
        districtId: Number,
    },
    country: {
        countryVal: String,
        getCountry: Array<Object>,
    },
    district: {
        districtVal: String,
        getDistrict: Array<Object>
    },
    region: {
        regionVal: String,
        getRegion: Array<Object>
    },
    userName: String,
    password: String,
    // credentials: {
    //     token
    // }
}

export const signUpStore = defineStore('signUpStore', {
    state: (): signUpForm => {
        return {
            createUser: {
                email: '',
                userName: '',
                password: '',
                personId: null,
            },
            createPerson: {
                firstName: '',
                middleName: '',
                lastName: '',
                passportSeria: '',
                passportNumber: '',
                genderId: null,
                countryId: null,
                regionId: null,
                districtId: null,
            },
            country: {
                countryVal: '',
                getCountry: [],
            },
            district: {
                districtVal: '',
                getDistrict: [],
            },
            region: {
                regionVal: '',
                getRegion: [],
            },
            userName: '',
            password: ''
        }
    },
    getters: {
        getCreateUser() {
            return this.createUser
        },
        getCreatePerson() {
            return this.createPerson
        },
        getCountry() {
          return this.country
        },
        getRegion() {
            return this.region
        },
        getDistrict() {
            return this.district
        },
    },
    actions: {
        onLogin() {

            const data = {
                name: this.userName,
                password: this.password
            }

            const res = axios.post(process.env.VITE_BASE_PATH + '/api/Authentication/login', data)

            console.log(data)

        }
    }
})

export const useSignUpStoreEveryWhere = () => {
    return signUpStore(store)
}
