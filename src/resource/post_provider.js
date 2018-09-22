import HTTP from './http_request'
class PostProvider  {

  getPost () {
    let post=[]
    const url = 'posts/6'
    const HTTPREQUEST = HTTP.get
     HTTPREQUEST(url).then(function(response) {
      post.push(response.data)     
    })
    return post
  }
  getPosts () {
    let posts=[]
    const url = 'posts'
    const HTTPREQUEST = HTTP.get
     HTTPREQUEST(url).then(function(response) {
      posts.push(response.data)     
    })
    return posts
  }
}
export default PostProvider
