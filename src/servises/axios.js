import axios from 'axios';
import {
    API_HOST,
    API_PORT_AUTH,
    API_PORT_REGISTER,
    API_PORT_PRODUCT
} from "../constants/env";

// Set default params, headers and other options for axios
// axios.defaults.baseURL = process.env.API_HOST;
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'; // 'application/json; charset=utf-8';
// axios.defaults.headers.common.Accept = 'application/json';
// axios.defaults.withCredentials = false;
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return error.response.statusText;
    },
);

export const AxiosService = (() => {

    function addHeaders(userConfig) {
        const {headers = {}, ...restConfigs} = userConfig;

        // Return extended config
        return {
            headers: {
                ...headers,
            },
            ...restConfigs,
        };
    }

    function setEnvPort(type) {
        if (type === 'auth') {
            axios.defaults.baseURL = API_HOST + ':' + API_PORT_AUTH;
        } else if (type === 'register') {
            axios.defaults.baseURL = API_HOST + ':' + API_PORT_REGISTER;
        } else if (type === 'product') {
            axios.defaults.baseURL = API_HOST + ':' + API_PORT_PRODUCT;
        }
    }

    async function GET(endPoint, config = {}, type = undefined) {
        if (undefined !== type) {
            await setEnvPort(type);
        }
        return axios.get(endPoint, addHeaders(config));
    }

    async function POST(
        endPoint,
        params = {},
        config = {},
        type
    ) {
        await setEnvPort(type);
        return axios.post(endPoint, params, addHeaders(config));
    }

    function PUT(
        endPoint,
        params = {},
        config = {},
    ) {
        return axios.put(endPoint, params, addHeaders(config));
    }

    function DELETE(endPoint, config = {}) {
        return axios.delete(endPoint, addHeaders(config));
    }

    return {
        GET,
        POST,
        PUT,
        DELETE,
        setEnvPort
    };
})();
