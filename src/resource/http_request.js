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

HTTP.interceptors.response.use(reponse => {
  return  reponse

}, error => {
	console.group('[Axios][Interceptor] Response Error')
	console.log(error)
	console.groupEnd()
	return Promise.reject(error)
})

class HttpRequest {
  constructor () {
    this.axios = axios
  }

  setHeader (header) {
    HTTP.defaults.headers.common[header.key] = header.value
    HTTP.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  }

  index (methodName) {
    let posts =[];
    const url = methodName
    const HTTPREQUEST = HTTP.get
     HTTPREQUEST(url).then(function (result) {         
         posts.push(result.data); // LIST = , OR RETURN - no idea how to set list
     });
console.dir(posts)
     return posts;
  }
  show (methodName) {
    let post=[]
    const url = methodName
    const HTTPREQUEST = HTTP.get
     HTTPREQUEST(url).then(function(response) {
      post.push(response.data)     
    })
    return post
  }
  store (methodName,data) {
    let posts
    const url = methodName
    const HTTPREQUEST = HTTP.post
     HTTPREQUEST(url,data).then(function(response) {
      posts=response.data.data    
    })
    return posts
  }
  update (methodName) {
    let posts=[]
    const url = methodName
    const HTTPREQUEST = HTTP.get
     HTTPREQUEST(url).then(function(response) {
      posts.push(response.data)     
    })
    return posts
  }
  delete (methodName) {
    let posts=[]
    const url = methodName
    const HTTPREQUEST = HTTP.delete
     HTTPREQUEST(url).then(function(response) {
      posts.push(response.data)     
    })
    return posts
  }
}
  export default HttpRequest