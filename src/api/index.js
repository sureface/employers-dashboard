import axios from "axios";

const loginConfig = {
    baseURL: process.env.VITE_BASE_PATH,
    headers: {
        'Content-Type': 'application/json'
    }
}

export const LoginAPIInstance = axios.create(loginConfig);

const defaultConfig = {
    baseURL: process.env.VITE_BASE_PATH,
    headers: {
        'Content-Type': 'application/json'
    }
}

export const DefaultAPIInstance = axios.create(defaultConfig);