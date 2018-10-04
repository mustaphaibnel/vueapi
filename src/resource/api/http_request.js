import HTTP from './HTTP'
class HttpRequest {
  constructor() {
    this.HTTP = HTTP
  }


  setHeader(header) {
    HTTP.defaults.headers.common[header.key] = header.value
    HTTP.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  }

  index(methodName) {
    const url = methodName
    const HTTPREQUEST = HTTP.get
     return HTTPREQUEST(url).then(function (response) {
     return response.data; // LIST = , OR RETURN - no idea how to set list
    });


    //posts.assign({}, posts)
    
   // return posts
  }
  show(methodName) {
    const url = methodName
    const HTTPREQUEST = HTTP.get
     return HTTPREQUEST(url).then(function (response) {
     return response.data; // LIST = , OR RETURN - no idea how to set list
    });
  }
  store(methodName, data) {
    let posts
    const url = methodName
    const HTTPREQUEST = HTTP.post
    HTTPREQUEST(url, data).then(function (response) {
      posts = response.data.data
    })
    return posts
  }
  update(methodName) {
    let posts = []
    const url = methodName
    const HTTPREQUEST = HTTP.get
    HTTPREQUEST(url).then(function (response) {
      posts.push(response.body)
    })
    return posts
  }
  delete(methodName) {
    let posts = []
    const url = methodName
    const HTTPREQUEST = HTTP.delete
    HTTPREQUEST(url).then(function (response) {
      posts.push(response.data)
    })
    return posts
  }
}
export default HttpRequest