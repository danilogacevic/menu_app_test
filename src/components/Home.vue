<template>
	<transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" appear appear-active-class="animated zoomIn">
		<router-view></router-view>
	</transition>
</template>

<script>
	export default {
		
	}
</script>