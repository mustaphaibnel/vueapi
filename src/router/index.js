import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes"
Vue.use(VueRouter);


const router = new VueRouter({
	mode: 'history',
	routes,
})

let auth=true;
router.beforeEach((to, from, next) => {
if (to.matched.some(record => record.meta.requiresAuth)) {
	// this route requires auth, check if logged in
	// if not, redirect to login page.
	if (!auth) {
	next({
		path: '/'
	})
	} else {
	next()
	}
} else {
	next() // make sure to always call next()!
}
})
export default router
