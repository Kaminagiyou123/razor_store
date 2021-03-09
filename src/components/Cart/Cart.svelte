<script>
    import globalStore from '../../stores/globalStore'
    import {fly,fade,blur} from 'svelte/transition'
    import {link} from 'svelte-routing'
    import Itemlist from '../Cart/Itemlist.svelte'
    import user from '../../stores/user'
    //itemList

</script>

<div class="cart-overlay" transition:blur>
    <!-- cart header -->
    <div class='cart-container' transition:fly={{x:100}}>
    <div class='cart' transition:fade={{delay:400}}>
    <div class='cart-header'>
        <button class='btn-close' on:click='{()=>{
            globalStore.toggleItem('cart', false)

        }}'>
        <i class='fas fa-window-close'></i>
        </button>
        <h2 class='cart-title'> Your Bag</h2>
    </div>
    <!-- end of cart header -->
    <!-- cart items -->
   <Itemlist/>
    <!-- end of cart items -->
      <!-- cart footer -->
      {#if $user.jwt} 
      <a href='/checkout' use:link class='btn btn-primary btn-block'
      on:click='{()=>{
        globalStore.toggleItem('cart', false)

    }}'>checkout</a>
      {:else}
      <p class= 'cart-login'>
 in order to check out please
      <a href='/login' use:link 
      on:click='{()=>{
        globalStore.toggleItem('cart', false)
    }}'>login</a></p>
      {/if}
      <!-- end of cart footer -->

    </div></div>
</div>