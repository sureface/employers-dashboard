import axios from "axios";

const fetchClient = () => {
    const defaultOptions = {
        baseURL: import.meta.env.VITE_BASE_PATH,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let instance = axios.create(defaultOptions);

    instance.interceptors.request.use(function (config) {
        const token = localStorage.getItem('TOKEN');
        config.headers.Authorization =  token ? `Bearer ${token}` : '';
        return config;
    });

    return instance
}

export default fetchClient()

