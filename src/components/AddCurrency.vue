<template>
	<div class="col-md-6 leftRightContent">
		<div class="addit">
			<p style="text-align: left;">Add currency</p>
		</div>
		
   <form>
		  <div class="form-group row">
		    <label for="inputEmail3" class="col-sm-2 col-form-label">Currency code</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" v-model="$v.iso.$model" placeholder="ISO">
		      <validation-error v-bind:validation="$v.iso" />

		    </div>
		  </div>
    <hr>

  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Currency symbol</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" v-model="$v.symbol.$model" placeholder="Symbol">
        <validation-error v-bind:validation="$v.symbol" />

    </div>
  </div>
  <hr>

  <div class="form-group">
    
      <button type="submit" class="btn btn-primary float-right addButton" @click="validateAndAdd(currency,$event)">Submit</button>
  </div>
</form>
      </div>
</template>

<script>
	import {mapMutations} from "vuex";
	import {required} from "vuelidate/lib/validators"
	import ValidationError from "./ValidationError"

	export default {

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

				isUnique(){

					return !this.$store.state.currencies.find(c => c.iso == this.iso);
				}
		
				},

			symbol: {

				required,
				isUnique(){

					return !this.$store.state.currencies.find(c => c.symbol == this.symbol);
				}


			}
		},

		computed: {

			currency(){

			return {id:this.id,iso:this.iso,symbol:this.symbol}

			},

		},

		created(){

			this.id = Math.ceil(Math.random()*100);

		},

		methods: {

			...mapMutations(["addCurrency"]),
			validateAndAdd(currency,event){
				event.preventDefault();

				this.$v.$touch();

				if(!this.$v.$invalid){

						this.addCurrency(currency);
						this.code='';
						this.symbol='';
						this.$router.push("/currencies");


				}
			}
		}

	}
</script>

<style scoped>
	.addit {
		border-bottom: 1px solid orange;
		margin-bottom: 1%;
	}

	.addButton {
		background-color: orange;
		border: none;
	}
</style>

