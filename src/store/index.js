import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	strict:true,
	state: {
		currencies: [

					{
						id:1,
						iso:"Dollar",
						symbol:"$"
					},
					{
						id:2,
						iso:"Euro",
						symbol:"E"
					},
					{
						id:3,
						iso:"Dinar",
						symbol:"D"
					}

		],
		activeCurrency: null
	},
	getters: {

		getActive: state => state.currencies.find(c => c.id == state.activeCurrency),

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
		setActive(state,currency){

			state.activeCurrency = currency;



		}
	}
});