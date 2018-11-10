<template>
	<div class="col-md-4">
        <ul class="list-group list-group-flush float-left">

	        <li class="list-group-item">Currency list</li>
			<li class="list-group-item" v-for="c in currencies" v-bind:key="c.id" @click.self="editCurrency(c)">{{c.iso}} <span @click="deleteCurrency(c.id)" class="float-right">delete</span></li>
			<li class="list-group-item">

				<router-link to="/currencies/add">
                    Add currency
                </router-link></li>

		</ul>
      </div>
</template>

<script>
	import {mapState, mapMutations} from "vuex";

	export default {
		computed: {
			...mapState(["currencies"])
		},
		methods: {
			...mapMutations(["setActive","deleteCurrency"]),
			
			editCurrency(c){

				this.$store.commit("setActive",c);
				this.$router.push("/currencies/edit");

			}
		}
	}
</script>