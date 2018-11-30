import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	strict:true,
	state: {
		currencies: [],
		searchedCurrency:[],
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
		searchCurrency(state,term){

			term = term.toLowerCase();

	state.searchedCurrency = state.currencies.filter(

		c => c.iso.toLowerCase().includes(term) || c.symbol.toLowerCase().includes(term)

			);

		},
		setCartData(state,data) {
			state.currencies = data;
		}


	},
	actions: {
		loadCurrencyList(context){

			let data = localStorage.getItem("list");

			if(data !=null){
				context.commit("setCartData",JSON.parse(data));
			}
		},
		storeCurrency(context){
			localStorage.setItem("list",JSON.stringify(context.state.currencies));
		},
		initializeStoreData(context,store){
			context.dispatch("loadCurrencyList");
			store.watch(state => state.currencies,
				()=>context.dispatch("storeCurrency"));
		}
	}
});