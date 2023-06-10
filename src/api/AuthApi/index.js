import {LoginAPIInstance, DefaultAPIInstance} from "../index.js";

export  const AuthApi = {

    /**
     *
     * @param {string} login
     * @returns {Promise<axios.AxiosResponse<any>>}
     */

    login(login,password) {
        const url = '/login'
        const data = {login,  password}
        return LoginAPIInstance.post(url, data)
    },

    /**
     *
     * @returns {Promise<axios.AxiosResponse<any>>}
     */

    logout() {
        const url = '/login'
        return DefaultAPIInstance.post(url)
    }
}