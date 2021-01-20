<template>
	<v-list nav>
		<router-link to="/dashboard">
			<v-list-item link :class="[currentPath.includes('dashboard') ? activeClass : '']">
				<v-list-item-icon></v-list-item-icon>
				<v-list-item-title >Dashboard</v-list-item-title>
			</v-list-item>
		</router-link>
		<router-link to="/category">
			<v-list-item link :class="[currentPath.includes('category') ? activeClass : '']">
				<v-list-item-icon></v-list-item-icon>
				<v-list-item-title>Product Category</v-list-item-title>
			</v-list-item>
		</router-link>
		<router-link to="/products">
			<v-list-item link :class="[currentPath.includes('products') ? activeClass : '']">
				<v-list-item-icon></v-list-item-icon>
				<v-list-item-title>Products</v-list-item-title>
			</v-list-item>
		</router-link>
		<router-link to="/purchase">
			<v-list-item link :class="[currentPath.includes('purchase') ? activeClass : '']">
				<v-list-item-icon></v-list-item-icon>
				<v-list-item-title>Purchase</v-list-item-title>
			</v-list-item>
		</router-link>
		<router-link to="/sales">
			<v-list-item link :class="[currentPath.includes('sales') ? activeClass : '']">
				<v-list-item-icon></v-list-item-icon>
				<v-list-item-title>Sales</v-list-item-title>
			</v-list-item>
		</router-link>
		<router-link to="/view_stock">
			<v-list-item link :class="[currentPath.includes('view_stock') ? activeClass : '']">
				<v-list-item-icon></v-list-item-icon>
				<v-list-item-title>View Stock</v-list-item-title>
			</v-list-item>
		</router-link>
		<router-link to="/reports">
			<v-list-item link :class="[currentPath.includes('reports') ? activeClass : '']">
				<v-list-item-icon></v-list-item-icon>
				<v-list-item-title>Invoice / Report</v-list-item-title>
		</v-list-item>
		</router-link>
	</v-list>
</template>

<script>
export default {
	name: 'SidebarMenu',
	data() {
		return {
			activeClass: 'active'
		}
	},
	computed: {
		currentPath() {
			return this.$route.path;
		}
	}
}
</script>

<style scoped>
a{
	text-decoration: none;
}
.active {
	opacity: 1;
	visibility: visible;
	margin: 10px;
	transition: all 0.25s;
	background: gainsboro;
}
</style>