import { request, request1 } from 'network/request'

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

export function getLocalGoods(type, page) {
    return request1('/data.json', type, page);
}
