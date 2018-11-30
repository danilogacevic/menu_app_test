<template>
	<div class="col-md-4 leftRightContent" style="background-color: whitesmoke;">
		<input type="text" class="form-control"  v-model="searchTerm" placeholder="Search" style="margin-bottom: 2%;">
        <ul v-if="visible" class="list-group list-group-flush float-left" style="width: 100%;" >
			<li class="list-group-item listHeader">Currency list</li>
				<single-currency class="list-group-item currency" v-for="c in currencies" v-bind:key="c.id" v-bind:currency="c"><span @click.self="deleteCurrency(c.id)" class="float-right">delete</span></single-currency>
			<li class="list-group-item">
				<router-link to="/currencies/add">
					<font-awesome-icon icon="plus-square"/>
					Add currency
				</router-link>
            </li>
        </ul>
		<ul v-if="!visible" class="list-group list-group-flush float-left" style="width: 100%;">
				<single-currency class="list-group-item currency" v-for="c in searchedCurrency" v-bind:key="c.id" v-bind:currency="c"><span @click.self="deleteCurrency(c.id)" class="float-right">delete</span></single-currency>
		</ul>
      </div>
</template>

<script>


	import debounce from 'lodash/debounce'
	import {mapState, mapMutations,mapActions} from "vuex";
	import SingleCurrency from "./SingleCurrency"

	export default {

		components:{

			SingleCurrency
		},

		data(){

			return {

				searchTerm:'',
				visible:true
			}
		},

		watch: {

			searchTerm: function(term) {

				this.debouncedSearch();

				if(term != '') {

				this.visible=false;
		

				} else {

				this.visible=true;
			

				}
 

			}

		},

		computed: {

			...mapState(["currencies","searchedCurrency"]),

		},
		methods: {

			...mapMutations(["setActive","deleteCurrency","searchCurrency"]),
			...mapActions(["initializeStoreData"]),

			searchForCurrency(){

				this.searchCurrency(this.searchTerm);

			}

		},
		created(){

			this.initializeStoreData(this.$store);
			this.debouncedSearch = debounce(this.searchForCurrency,500)
		}
	}
</script>

<style>

	a {
		color:orange !important;
	}

	

</style>