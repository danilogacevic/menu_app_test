<template>
	<div class="col-md-4 leftRightContent" style="background-color: whitesmoke;">
		<input type="text" class="form-control" v-on:input="searchCurrency(searchTerm)" v-model="searchTerm" placeholder="Search" style="margin-bottom: 2%;">
        <ul ref="list" class="list-group list-group-flush float-left" style="width: 100%;" >
		
	        <li class="list-group-item listHeader">Currency list</li>


			<li class="list-group-item currency" v-for="c in currencies" v-bind:key="c.id" @click.self="editCurrency(c,$event)">{{c.iso}} <span @click="deleteCurrency(c.id)" class="float-right">delete</span></li>

			<!-- <li class="list-group-item" v-for="c in searchedCurrency" v-bind:key="c.id" @click.self="editCurrency(c)">{{c.iso}} <span @click="deleteCurrency(c.id)" class="float-right">delete</span></li> -->


			<li class="list-group-item">

				<router-link to="/currencies/add">
						<font-awesome-icon icon="plus-square"/>
		                    Add currency
                </router-link>
            </li>

		</ul>
		<ul class="list-group list-group-flush float-left" style="width: 100%;">

	        <li class="list-group-item" v-if="searching">Searched List</li>


			<li class="list-group-item" v-for="c in searchedCurrency" v-bind:key="c.id" @click.self="editCurrency(c,$event)">{{c.iso}} <span @click="deleteCurrency(c.id)" class="float-right">delete</span></li>
			
		</ul>
      </div>
</template>

<script>
	import {mapState, mapMutations,mapActions} from "vuex";

	export default {

		data(){

			return {

				searchTerm:''
			}
		},

		watch: {

			searchTerm: function(term) {

				this.searchCurrency(term);

				if(term != '') {

				this.$refs.list.style.display = "none";
				// return true;

				} else {

				this.$refs.list.style.display = "block";
				// return false;

				}
 

			}

		},

		computed: {

			...mapState(["currencies","searchedCurrency"]),

			searching(){

				return this.searchTerm != '' ? true : false;

			}


		},
		methods: {
			...mapMutations(["setActive","deleteCurrency","searchCurrency"]),
			...mapActions(["initializeStoreData"]),

			editCurrency(c,event){

				let elements = Array.from(document.getElementsByClassName("currency"));
				elements.forEach(el => el.style.color = "black");

				event.target.style.color = "orange";

				this.$store.commit("setActive",c);
				this.$router.push("/currencies/edit");

			}
		},
		created(){

			this.initializeStoreData(this.$store);
		}
	}
</script>

<style>

	a {
		color:orange !important;
	}

	.listHeader {
		color: orange;
		border-bottom: 2px solid orange !important;
	}

</style>