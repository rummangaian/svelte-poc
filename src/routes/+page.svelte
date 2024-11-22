
<script lang="ts" >
  let handleFunc: () =>void = () => {
    console.log("clicked")
  }
</script>
{#snippet button(text:string , func:() => void)}
  <button onclick={func}>{text}</button>
{/snippet}
<h1>
  Landing Page
</h1>

<!-- have a button POST a click via AJAX -->
<button  hx-get="/api" hx-swap="outerHTML">
  api
</button>



<!-- {@render button("Click Me Test case 1" , handleFunc)}

{@render button("Click Me Test case 2" , handleFunc)} -->


<style>
  h1 {
    color: grey;
  }
</style>
