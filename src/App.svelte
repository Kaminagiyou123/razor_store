<script>
	// pages
	import Login from './pages/Login.svelte'
	import Checkout from './pages/Checkout.svelte'
	import Products from './pages/Products.svelte'
	import ProductTemplate from './pages/ProductTemplate.svelte'
	import About from './pages/About.svelte'
	import Home from './pages/Home.svelte'
	//router
	import { Router, Link,Route } from "svelte-routing";
	export let url = "";
	//compoents
	import Navbar from './components/Navbar/Navbar.svelte'
</script>
<Router url="{url}">
	<Navbar/>
	

<Route path='/' component="{Home}"/>
<Route path="/login" component="{Login}" />
<Route path="/checkout" component="{Checkout}" />
<Route path="/products" component="{Products}" />
<Route path="/about" component="{About}" />
<Route path="/products/:id" component="{ProductTemplate}" />
</Router>



	