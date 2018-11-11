<template>
	<div class="col-md-6 leftRightContent">

		<div class="addit">
			<p style="text-align: left;">Edit currency</p>
		</div>
        <form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Currency code</label>
    <div class="col-sm-10">
   <!--    <input type="text" class="form-control" v-model="code" placeholder="Email"> -->

      <input type="text" class="form-control" v-model="$v.code.$model" placeholder="Email">
		      <validation-error v-bind:validation="$v.code" />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Currency symbol</label>
    <div class="col-sm-10">
      <!-- <input type="text" class="form-control" v-model="symbol" placeholder="Password"> -->

      <input type="text" class="form-control" v-model="$v.symbol.$model" placeholder="Password">
        <validation-error v-bind:validation="$v.symbol" />
    </div>
  </div>
  

  <div class="form-group">
    
      <button type="submit" class="btn btn-primary float-right addButton" @click="editCurrency(currency,$event)">Update</button>
  </div>
</form>
      </div>
</template>

<script>
	import {mapState,mapMutations} from "vuex";
	import {required} from "vuelidate/lib/validators"
	import ValidationError from "./ValidationError"



	let unwatcher;

	export default {

		components: {ValidationError},


		data() {

			return {

				code:"",
				symbol:"",
				id:null
			}
		},

		validations: {
			code: {

				required,

				isUnique(){

					// return this.isDuplicate == -1;
					return !this.$store.state.currencies.find(c => c.iso == this.code);
				}
		
				},

			symbol: {

				required,
				isUnique(){

					// return this.isDuplicate == -1;
					return !this.$store.state.currencies.find(c => c.symbol == this.symbol);
				}


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

				this.$v.$touch();

				if(!this.$v.$invalid){

						this.$store.commit("editCurrency",currency);
								
						this.$router.push("/currencies");


				}

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

<style scoped>
	  .addButton {
		    background-color: orange;
		    border: none;
				  }
</style>