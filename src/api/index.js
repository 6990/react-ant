import http from './axios'

export const getData = (params) => {
    return http.request({
        url: `/api?${params}`,
        method: 'get'
    })
}