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
	//components
	import Navbar from './components/Navbar/Navbar.svelte'
	import Sidebar from './components/Navbar/Sidebar.svelte'
	import Cart from './components/Cart/Cart.svelte'
	import globalStore from './stores/globalStore'
	import Alert from './components/Alert.svelte'
</script>
<Router url="{url}">
	<Navbar/>
	{#if $globalStore.sidebar}
	<Sidebar/>
	{/if}

	{#if $globalStore.cart}
	<Cart/>
	{/if}

	{#if $globalStore.alert}
	<Alert/>
	{/if}

<Route path='/' component="{Home}"/>
<Route path="/login" component="{Login}" />
<Route path="/checkout" component="{Checkout}" />
<Route path="/products" component="{Products}" />
<Route path="/about" component="{About}" />
<Route path="/products/:id" component="{ProductTemplate}" />
</Router>



	