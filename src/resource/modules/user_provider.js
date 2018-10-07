import HttpRequest from '../api/http_request'
class UserProvider extends HttpRequest {

  UserShow(id) {
    return this.show('users/' + id)
  }
  UserIndex() {
    return this.index('users')
  }
  UserStore(data) {
    return this.show('users', data)
  }
  UserUpdate(data) {
    return this.show('users/' + data.id, data.user)
  }
  UserDelete(id) {
    return this.show('users/' + id)
  }
}
export default UserProvider