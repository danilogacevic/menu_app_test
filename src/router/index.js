import Vue from "vue";
import VueRouter from "vue-router";


import Home from "../components/Home"
import AddCurrency from "../components/AddCurrency"
import EditCurrency from "../components/EditCurrency"

Vue.use(VueRouter);



export default new VueRouter({
	routes: [
		{path:"/currencies",component:Home},
		{ path: "/currencies/add",component: AddCurrency},
		{ path: "/currencies/edit",component: EditCurrency},
		{ path: "*", redirect: "/currencies"}


	]
});