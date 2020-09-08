<template>
	<router-view></router-view>
</template>

<script>
import Login from '../components/Login';

export default {
	name: 'LoginPage',
	components: {
		Login,
	}
}
</script>