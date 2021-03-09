<script>
import {link} from 'svelte-routing'
import links from '../../constants/links'
import globalStore from '../../stores/globalStore'
import LoginLink from '../../components/LoginLink.svelte'
import {fly,fade} from 'svelte/transition'
    let closeSidebar=globalStore.toggleItem;
</script>
<div class='sidebar-container' transition:fly={{x:-1000}}>
    <div class='sidbar' transition:fade={{delay:400}}>
        <div class='sidebar-header'>
            <button class='btn-close'
            on:click={()=>{
                closeSidebar('sidebar',false)
            }}>
                <i class='fa fa-window-close'/>
            </button>
        </div>
        <img src='/assets/images/logo.svg' class='logo' alt='razor logo'/>
        <ul class='sidebar-links'>
            {#each links as sideLink}
            <li>
                <a href={sideLink.url} use:link
                on:click={()=>{
                    closeSidebar('sidebar',false)
                }}>{sideLink.text}</a> 
            </li>
            {/each} 
            <li>
                <LoginLink/>
            </li>
        </ul>
    </div>
</div>