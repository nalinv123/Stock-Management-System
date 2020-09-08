import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../pages/Login';

Vue.use(VueRouter);

const routes = [
	{ 
		path: '/', 
		component: Login,
		children: [
			{
				path: '/',
				component: () => import("../components/Login.vue")
			}
		]
	}
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;