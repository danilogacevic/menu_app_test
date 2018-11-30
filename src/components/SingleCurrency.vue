<template>
	<li class="list-group-item" :class="{listHeader:active}" @click="editCurrency(currency)">

		{{currency.iso}}

		<slot></slot>
		
	</li>
</template>

<script>

	import {mapState,mapMutations} from "vuex"

	export default {

		name:'SingleCurrency',

		props: ["currency"],

		data(){

			return {

				active:false
			}

		},

		computed: {

			...mapState(["activeCurrency"]),


		},
		methods: {

			...mapMutations(["setActive"]),

			editCurrency(currency) {

				this.$store.commit("setActive",currency);
				this.$router.push("/currencies/edit");

			},

			isActive(){

				this.active = JSON.stringify(this.activeCurrency) === JSON.stringify(this.currency) ? true : false

			}
		},

		inject: ["editingCurrency"],

		created() {

			this.editingCurrency.$on('changeSelected',this.isActive)
		}

	}

</script>

<style scoped="">
	.listHeader {
		color: orange;
		border-bottom: 2px solid orange !important;
	}
</style>