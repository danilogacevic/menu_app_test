<template>
	<div class="col-md-4">
        <form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Currency code</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" v-model="$v.code.$model" placeholder="Email">
      <validation-error v-bind:validation="$v.code" />

    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Currency symbol</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" v-model="$v.symbol.$model" placeholder="Password">
        <validation-error v-bind:validation="$v.symbol" />

    </div>
  </div>
  

  <div class="form-group">
    
      <button type="submit" class="btn btn-primary float-right" @click="validateAndAdd(currency,$event)">Sign in</button>
  </div>
</form>
      </div>
</template>

<script>
	import {mapState,mapMutations} from "vuex";
	import {required} from "vuelidate/lib/validators"
	import ValidationError from "./ValidationError"

	export default {

		components: {ValidationError},

		data() {

			return {

				code:'',
				symbol:''
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

			currency(){

			return Object.assign({id:Math.ceil(Math.random()*100)},{iso:this.code,symbol:this.symbol});

			},

			// isDuplicate(){
			// 	return this.$store.state.currencies.findIndex(c => c.iso == this.code || c.symbol == this.symbol);
			// }

		},

		methods: {

			// addCurrency(currency){

			// 	// this.$store.commit("addCurrency",currency);
			// 	// console.log(currency);
			// }

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