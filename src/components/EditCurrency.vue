<template>
	<div class="col-md-6 leftRightContent">

		<div class="addit">
			<p style="text-align: left;">Edit currency</p>
		</div>
        <form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Currency code</label>
    <div class="col-sm-10">


      <input type="text" class="form-control" v-model="$v.iso.$model" placeholder="ISO">
		      <validation-error v-bind:validation="$v.iso" />
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Currency symbol</label>
    <div class="col-sm-10">
  

      <input type="text" class="form-control" v-model="$v.symbol.$model" placeholder="Symbol">
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
	import {mapMutations} from "vuex";
	import {required} from "vuelidate/lib/validators"
	import ValidationError from "./ValidationError"



	let unwatcher;

	export default {

		name: 'EditCurrency',

		components: {ValidationError},


		data() {

			return {

				id:null,
				iso:'',
				symbol:''
			}
		},

		validations: {
			iso: {

				required,
		
				},

			symbol: {

				required,
			}
		},

		computed: {

			currency(){

				return {id:this.id,iso:this.iso,symbol:this.symbol}
			}

		},

		methods: {

			...mapMutations(["setActive"]),

			currencyToEdit(){

				this.iso = this.$store.state.activeCurrency.iso;
				this.symbol = this.$store.state.activeCurrency.symbol;
				this.id = this.$store.state.activeCurrency.id;

				this.editingCurrency.$emit('editingCurrencySelected')

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

		inject: ["editingCurrency"],

		created(){

			unwatcher = this.$store.watch(state => state.activeCurrency, this.currencyToEdit);

			this.currencyToEdit();
		},

		beforeDestroy(){

			this.setActive(null);
			this.editingCurrency.$emit('editingCurrencySelected');

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