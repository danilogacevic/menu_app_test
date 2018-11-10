import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	strict:true,
	state: {
		currencies: [],
		activeCurrency: null
	},
	getters: {

		isDuplicate: (state,value) => state.currencies.findIndex(c => c.iso == value || c.symbol == value),

	},
	mutations: {
		
		addCurrency(state,currency) {
			state.currencies.push(currency);
		},

		editCurrency(state,currency) {

			let c = state.currencies.find(c => c.id === currency.id);

			if(JSON.stringify(currency) !== JSON.stringify(c)) {

			state.currencies.splice(state.currencies.indexOf(c),1,currency);

			} 

		},
		deleteCurrency(state,id) {

			let index = state.currencies.findIndex(c => c.id === id);
			state.currencies.splice(index,1);

		},
		setActive(state,currency){

			state.activeCurrency = currency;

		},
		
	}
});