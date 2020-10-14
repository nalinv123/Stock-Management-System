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
				name: 'Login',
				component: () => import('../components/auth/Login.vue')
			},
			{
				path: '/forgot_password',
				name: 'Forgot Password',
				component: () => import('../components/auth/ForgotPassword.vue')
			},
			{
				path: '/reset_password/:token/:email',
				name: 'Reset Password',
				component: () => import('../components/auth/ResetPassword.vue')
			}
		]
	},
	{
		path: '/dashboard',
		component: () => import('../pages/Home'),
		children: [
			{
				path: '/',
				name: 'Dashboard',
				component: () => import('../components/Dashboard')
			}
		]
	},
	{
		path: '*',
		name: 'Not Found',
		component: () => import('../components/common/NotFound')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	const publicPages = ['/', '/forgot_password', '/reset_password/*'];
	let authRequired = !publicPages.includes(to.path);
	if (authRequired && to.path.includes('/reset_password')) {
		authRequired = false;
	}
	const loggedIn = sessionStorage.getItem('user');

	if (authRequired && !loggedIn) {
		document.title = "Stock Management System";
		return next('/');
	}
	document.title = "Stock Management System" + ' - ' + to.name;
	next();
});

export default router;