import Vue from 'vue';
import Vuex from 'vuex';
import { loginModule } from './modules/login.module';
import { loaderModule } from './modules/loader.module';
import { alertModule } from './modules/alert.module';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		loginModule,
		loaderModule,
		alertModule
	}
});

export default store;