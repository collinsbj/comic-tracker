import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import Comics from "./views/Comics.vue"

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/comics",
			name: "comics",
			component: Comics
		}
	]
})
