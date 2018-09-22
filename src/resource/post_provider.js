import HttpRequest from './http_request'
class PostProvider extends HttpRequest {

  getPost () {
    return this.show('posts/'+id)
  }
  getPosts () {
    return this.index('posts')
  }
}
export default PostProvider
