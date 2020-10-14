<template>
	<v-app-bar clipped-left app>
		<v-btn text @click="messageSidebar()">
			<v-icon left>{{ icons.mdiMenu }}</v-icon>
		</v-btn>
		<v-toolbar-title>
			Hello
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn tile text>
			<v-icon left>
				{{ icons.mdiAccount }}
			</v-icon>
			Profile</v-btn>
		<v-btn tile text @click="doLogout()">
			<v-icon>
				{{ icons.mdiLogout }}
			</v-icon> 
			Logout</v-btn>
	</v-app-bar>
</template>

<script>
import { mdiAccount, mdiLogout, mdiMenu } from '@mdi/js';

export default {
	name: 'Header',
	data: () => ({
		showMenu: true,
		icons: {
			mdiAccount,
			mdiLogout,
			mdiMenu
		}
	}),
	created() {
		this.$emit('headerSaid', this.showMenu)
	},
	methods: {
		messageSidebar() {
			this.showMenu = !this.showMenu;
			this.$emit('headerSaid', this.showMenu);
		},
		doLogout() {
			this.$store.dispatch('loginModule/logout');
		}
	}
};
</script>