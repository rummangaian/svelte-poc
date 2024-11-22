<script lang="ts">
    import {type SidebarProps as Props} from "."
    let { children , wrapperClass} :Props = $props()
</script>

<div class={`sidebarWrapper ${wrapperClass}`}>
    {@render children()}
</div>

<style>
    .sidebarWrapper{
        width: 100%;
    }
</style>
