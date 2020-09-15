<template>
	<v-navigation-drawer app :value="drawer">
	</v-navigation-drawer>
</template>

<script>
export default {
	name: 'Sidebar',
	data: () => ({
		isOpen: true
	}),
	props: ['messageSidebar'],
	computed: {
		drawer() {
			return this.$props.messageSidebar;
		}
	}
};
</script>