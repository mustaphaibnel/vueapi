import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import store from './store';
Vue.use(Vuetify)

Vue.use(VueResource);
Vue.http.interceptors.push(function(request, next) {
    // continue to next interceptor
    next(function(response) {
        if(response.status == 404){
            router.push('/admin') 
        }
        else{
          next()
        }
    });
 });


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
