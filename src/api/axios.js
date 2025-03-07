import axios from "axios";


const baseUrl = 'https://randomuser.me'


class HttpRequest {

    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    getInsideConfig(options) {
        const config = {
            url: `${this.baseUrl}${options.url}`,
            header: {}
        }
        return config
    }

    interception(instance) {
        // interceptor for request
        instance.interceptors.request.use(config => {
            // todo before send request
            return config;
        }, error => {
            // error handler
            console.error(error)
            return Promise.reject(error)
        })
        // interceptor for response
        instance.interceptors.response.use(response => {
            return response.data
        }, error => {
            console.error(error)            
            return Promise.reject(error)
        })
    }

    request(options) {
        options = { ...options, ...this.getInsideConfig(options) }
        const instance = axios.create();
        this.interception(instance)
        return instance(options)

    }

}

export default new HttpRequest(baseUrl)