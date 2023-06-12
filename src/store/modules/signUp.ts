import {defineStore} from 'pinia'
import {store} from '../index'
import axios from "axios";
import {UnwrapRef} from "vue";

const baseUrl = import.meta.env.VITE_BASE_PATH;

interface signUpForm {
    country: Array<any>,
    district: Array<any>,
    region: Array<any>,
    userName: String,
    password: String,
    gender: Array<any>,
    userId: Number,
    signUpDetect: Boolean,
    signUpMessage: String,
}

export const signUpStore = defineStore('signUpStore', {
    state: (): signUpForm => {
        return {
            country: [],
            district: [],
            region: [],
            userName: '',
            password: '',
            gender: [],
            userId: null,
            signUpDetect: false,
            signUpMessage: ''
        }
    },
    getters: {
        GiveTheUserId() {
          return this.userId
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
        getGender() {
            return this.gender
        },
        getSignUpDetect() {
            return this.signUpDetect
        },
        getSignUpMessage() {
            return this.signUpMessage
        }
    },
    actions: {
        async getCountries() {

            const token = localStorage.getItem('TOKEN')

            const headers = {
                Authorization: `Bearer ${token}`
            }

            const res = await axios.get(baseUrl + 'Country/GetCountryList', {
                headers
            });
            this.country = res.data

            console.log(this.country)

        },
        async getRegions(value: UnwrapRef<string>) {

            console.log(value)

            const token = localStorage.getItem('TOKEN')

            const headers = {
                Authorization: `Bearer ${token}`
            }

            const res = await axios.get(baseUrl + `Country/GetRegionListByCountryId/${value}`, {
                headers
            });
            this.region = res.data

        },
        async getDistricts(value: UnwrapRef<string>) {

            const token = localStorage.getItem('TOKEN')

            const headers = {
                Authorization: `Bearer ${token}`
            }

            const res = await axios.get(baseUrl + `District/GetDistrictByid/${value}`, {
                headers
            });
            this.district.push(res.data)
        },
        async getGenders() {
            const token = localStorage.getItem('TOKEN')

            const headers = {
                Authorization: `Bearer ${token}`
            }

            const res = await axios.get(baseUrl + `Gender/GetGenderList`, {
                headers
            });
            this.gender = res.data
        },
        async createPerson(personData) {
            const token = localStorage.getItem('TOKEN')

            const headers = {
                Authorization: `Bearer ${token}`
            }

            const payload = {
                passportSeria: personData.passportSeria,
                passportNumber: personData.passportSeriaNumber,
                firstName: personData.firstName,
                middleName: personData.middleName,
                lastName: personData.lastName,
                genderId: personData.genders,
                countryId: personData.countyVal,
                regionId: personData.regionVal,
                districtId: personData.districtVal
            }

            try {
                const res = await axios.post(baseUrl + `Person/CreatePerson`, payload,{
                    headers
                });
                console.log(res.data.id, 'create progressing..')

                this.userId = res.data.id
            } catch (err) {
                console.log(err)
            }
        },
        async createUser(userData) {
            const token = localStorage.getItem('TOKEN')

            const headers = {
                Authorization: `Bearer ${token}`
            }

            const payload = {
                email: userData.email,
                userName: userData.userName,
                password: userData.password,
                personId: this.userId
            }

            try {
                const res = await axios.post(baseUrl + `User/CreateUser`, payload,{
                    headers
                });
                console.log(res)
                if (res.status === 200 && res.statusText === 'OK') {
                    this.signUpDetect = true
                    this.signUpMessage = 'You Have benn successfully registred ! you can Login now !'
                } else {
                    this.signUpDetect = false
                    this.signUpMessage = 'something is wrong try again with different user names !'
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
})

export const useSignUpStoreEveryWhere = () => {
    return signUpStore(store)
}
