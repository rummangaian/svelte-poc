<script lang="ts">
    import Sidebar from "$lib/sidebar/Sidebar.svelte";
    import SidebarMenu from "$lib/sidebar/SidebarMenu.svelte";
    let {children} = $props()
    import "../app.css";
    import { sidebarlistItem } from "../constants/sidebarItemsList";
</script>

<div class="mainConatiner">

<Sidebar wrapperClass="dark:bg-gray-200 bg-gray-200 w-64  text-gray-400">
    <p>This is a Sidebar Component</p>
    {#each sidebarlistItem as item}
    <SidebarMenu itemClass="w-60 ml-2 bg-gray-400 text-white p-2 mb-1" item={item.name} navigate={item.route}/>
        {/each}
    </Sidebar>

{@render children()}

</div>

<style>
    .mainConatiner{
        width: 100vw;
        height: 100vh;
    }
</style>