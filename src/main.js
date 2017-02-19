import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import UserProfile from './components/UserProfile.vue'
import UserPost from './components/UserPost.vue'

const router = new VueRouter({
	routes: [
		{ path: '/', component: Home},
		{ path: '/about', component: About},
		{ path: '/user/:id', component: UserProfile},
		{ path: '/user/:id/posts', component: UserPost}
	],
	mode: 'history'
})
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
