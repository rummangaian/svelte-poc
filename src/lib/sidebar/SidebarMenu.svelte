<script lang="ts">
    import {type SidebarItems as Props} from "."
    let {item ,itemClass , navigate} :Props= $props();

</script>

<div >
   <button class={`${itemClass}`}>
    <a href={`${navigate}`}>{item}</a>
   </button>
</div>

<style>
    a{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
    }
</style>