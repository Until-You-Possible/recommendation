import axios from 'axios';
// timeout
axios.default.timeout = 10000;

// post header
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err);
});

axios.interceptors.response.use(response => {
    if(response.status === 200){
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
}, err => {
    if(err.response){
        // do something
    }
    return Promise.reject(err);
})


/**
 * GET
 * @param url
 * @param params
 * @return { Promise }
 *
 */

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then((res) => {
                resolve(res.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

/**
 * POST 封装
 * @param url
 * @param params
 * @return { Promise }
 *
 */


export function post(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then((res) => {
                resolve(res.data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}