import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../pages/Login';
import Home from '../pages/Home';

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
		component: Home,
		children: [
			{
				path: '/',
				name: 'Dashboard',
				component: () => import('../components/Dashboard.vue')
			},
			{
				path: '/category',
				name: 'Category',
				component: () => import('../components/category/Category.vue')
			},
			{
				path: '/category/add',
				name: 'Add Category',
				component: () => import('../components/category/Add.vue')
			},
			{
				path: '/category/edit/:id',
				name: 'Edit Category',
				props: true,
				component: () => import('../components/category/Add.vue')
			},
			{
				path: '/products',
				name: 'Product',
				component: () => import('../components/product/Product.vue')
			},
			{
				path: '/orders',
				name: 'Order',
				component: () => import('../components/purchase/Orders.vue')
			},
			{
				path: '/view_stock',
				name: 'View Stock',
				component: () => import('../components/ViewStock.vue')
			},
			{
				path: '/reports',
				name: 'Invoice / Report',
				component: () => import('../components/InvoiceReport.vue')
			},
		]
	},
	{
		path: '*',
		name: 'Not Found',
		component: () => import('../components/common/NotFound.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	// base: window.location.pathname, // process.env.BASE_URL,
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