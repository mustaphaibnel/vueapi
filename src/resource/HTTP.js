import axios from 'axios'
/* eslint-disable */
let baseURL

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = 'https://jsonplaceholder.typicode.com/'
} else {
  baseURL = 'http://api.example.com:8080'
}

 const HTTP = axios.create(
  {
    baseURL: baseURL
  })
  HTTP.defaults.timeout = 5000

/**
 * Declare Variable
 */

/**
 * Config
 */
HTTP.interceptors.request.use(config => {
	return config
}, error => {
	console.group('[Axios][Interceptor] Request Error')
	console.log(error)
	console.groupEnd()
	return Promise.reject(error)
})

HTTP.interceptors.response.use(data => {
  console.log(data)
    return data

}, error => {
	console.group('[Axios][Interceptor] Response Error')
	console.log(error)
	console.groupEnd()
	return Promise.reject(error)
})

export default {
    HTTP,
    axios
}