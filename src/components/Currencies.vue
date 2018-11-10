<template>

	<div class="container-fluid">
		<div class="row">
			<currency-list></currency-list>
			<router-view></router-view>
		</div>
        
      </div>

</template>

<script>
	import CurrencyList from "./CurrencyList";
	// import AddCurrency from "./AddCurrency";

	export default {

		components:{
			CurrencyList,
			// AddCurrency
		}

	}
</script>