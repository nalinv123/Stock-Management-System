<template>
	<v-app>
		<Header @headerSaid="messageSidebar($event)" />
		<Sidebar :messageSidebar="this.showMenu"/>
		<v-main>
			<v-container fluid>
				<Loader />
				<Alert />
				<router-view></router-view>
			</v-container>
		</v-main>
		<Footer />
	</v-app>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';
import Alert from '../components/Alert';

export default {
	name: 'Home',
	components: {
		Header,
		Footer,
		Sidebar,
		Loader,
		Alert
	},
	data: () => ({
		showMenu: false
	}),
	methods: {
		messageSidebar(message) {
			this.showMenu = message;
		}
	}
};
</script>