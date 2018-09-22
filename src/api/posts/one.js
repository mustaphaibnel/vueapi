import vue from 'vue'
import VueResource from 'vue-resource'
import Vue from 'vue';
Vue.use(VueResource)
let API_ROOT='https://jsonplaceholder.typicode.com/posts/1';
//let post='https://jsonplaceholder.typicode.com/posts/1';
function posts() {
    vue.$http.get(API_ROOT)
  .then(function (response) {
    // handle success
    return response
  })
  .catch(function (error) {
    // handle error
    return error
  })
  .then(function () {
    // always executed
  });
  }
export default {
    getPost () {

        return posts()
        
    }
}

