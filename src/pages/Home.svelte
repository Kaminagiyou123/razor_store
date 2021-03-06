<script>
import Hero from '../components/Hero.svelte'
 import {link} from 'svelte-routing'  
import Featured from '../components/Products/featured.svelte'
</script>

    <Hero>
        <a href ='products' class='btn btn-primary btn-hero'
         use:link>shop now </a>
    </Hero>
    <Featured title='featured products'/>