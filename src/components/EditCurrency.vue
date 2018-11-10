<template>
	<div class="col-md-4">
        <form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Currency code</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" v-model="code" placeholder="Email">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Currency symbol</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" v-model="symbol" placeholder="Password">
    </div>
  </div>
  

  <div class="form-group">
    
      <button type="submit" class="btn btn-primary float-right" @click="editCurrency(currency,$event)">Sign in</button>
  </div>
</form>
      </div>
</template>

<script>
	import {mapState,mapMutations} from "vuex";

	let unwatcher;

	export default {

		data() {

			return {

				code:"",
				symbol:"",
				id:null
			}
		},

		computed: {

			...mapState["getActive"],

			currency(){

			return Object.assign({id:this.id},{iso:this.code,symbol:this.symbol});

			}

		},

		methods: {


			// ...mapMutations(["editCurrency"]),
			currencyToEdit(){
				// console.log(this.$store.state.activeCurrency);
				this.code = this.$store.state.activeCurrency.iso;
				this.symbol = this.$store.state.activeCurrency.symbol;
				this.id = this.$store.state.activeCurrency.id;

			},
			editCurrency(currency,event) {
				event.preventDefault();
				this.$store.commit("editCurrency",currency);
				this.$router.push("/currencies");
			}
		},

		created(){
			unwatcher = this.$store.watch(state => state.activeCurrency, this.currencyToEdit);
			this.currencyToEdit(this.$store.state.activeCurrency);
		},
		beforeDestroy(){
			unwatcher();
		}



	}
</script>