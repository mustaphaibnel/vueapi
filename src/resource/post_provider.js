import HttpRequest from './http_request'
class PostProvider extends HttpRequest {

  PostShow(id) {
    return this.show('posts/' + id)
  }
  postIndex() {
    return this.index('posts')
  }
  PostStore(data) {
    return this.show('posts', data)
  }
  PostUpdate(data) {
    return this.show('posts/' + data.id, data.post)
  }
  PostDelete(id) {
    return this.show('posts/' + id)
  }
}
export default PostProvider