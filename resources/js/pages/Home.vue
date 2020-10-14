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
import Header from '../components/system/Header';
import Footer from '../components/system/Footer';
import Sidebar from '../components/system/Sidebar';
import Loader from '../components/common/Loader';
import Alert from '../components/common/Alert';

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