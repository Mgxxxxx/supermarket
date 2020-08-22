import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    instance.interceptors.request.use(config => {
        return config;
    }, err => { })
    instance.interceptors.response.use(res => {
        return res.data;
    }, err => { console.log(err) })

    return instance(config)
}

export function request1(url, type, page) {
    const instance = axios.create({
        timeout: 3000
    })
    instance.interceptors.response.use(res => {
        return res.data[type][page];
    }, err => { console.log(err) })

    return instance.get(url)
}
