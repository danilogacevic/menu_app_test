<template>

	<div class="container-fluid">
		<div class="row">
			<div class="col-md-4 custom-header">
				<nav class="navbar" style="background-color: #ff751a;">
				  <!-- Navbar content -->
				  <span style="color:white;"><font-awesome-icon icon="arrow-down"/></span>
				</nav>
			</div>
			<div class="col-md-8 custom-header">
				<nav class="navbar" style="background-color: #ff944d;">
				  <!-- Navbar content -->
				  <span style="color:white;padding-left: 2%;"><font-awesome-icon icon="euro-sign"/> Currencies</span>
				</nav>
			</div>

		
		</div>

		<div class="row main-content">
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

<style scoped>
	.navbar {
		padding: 8px 0px;
	}

	.main-content {
		height: 90vh;
		border-bottom: 1px solid black;
	}

	.custom-header {
		padding: 0px !important;
	}

	.orange {
		background-color: #ff751a;
	}
</style>