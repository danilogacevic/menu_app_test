<template>
	<div class="col-md-4">
        <form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Currency code</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" v-model="code" placeholder="Email">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Currency symbol</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" v-model="symbol" placeholder="Password">
    </div>
  </div>
  

  <div class="form-group">
    
      <button type="submit" class="btn btn-primary float-right" @click="addCurrency(currency)">Sign in</button>
  </div>
</form>
      </div>
</template>

<script>
	import {mapMutations} from "vuex";

	export default {

		data() {

			return {

				code:'',
				symbol:''
			}
		},

		computed: {

			currency(){

			return Object.assign({id:Math.ceil(Math.random()*100)},{iso:this.code,symbol:this.symbol});

			}

		},

		methods: {

			// addCurrency(currency){

			// 	// this.$store.commit("addCurrency",currency);
			// 	// console.log(currency);
			// }

			...mapMutations(["addCurrency"])
		},

	}
</script>