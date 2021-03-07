<script>
    // cart button
    //global sotre
    import {link} from 'svelte-routing'
    import Cartbutton from '../Cart/Cartbutton.svelte'
</script>
<nav class='navbar'>
    <div class='nav-center'>
        <button class='btn-sidebar-toggle'>
            <i class='fas fa-bars'/>
        </button>
        <a href='/' use:link class='nav-logo'>
        <img src='/assets/images/logo.svg' class='logo' alt='razor logo'></a>
     <Cartbutton/> 
    </div>
  
</nav>