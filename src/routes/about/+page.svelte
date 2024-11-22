<script>

  import { onMount } from "svelte";

  onMount(async () => {
    await import("htmx.org");
  });
</script>

<h1>
  HTMX loading the server response in the specified target element inside a
  <b>div</b>
</h1>

<form
  method="POST"
  hx-post="/api/clicked"
  hx-target="#response"
  hx-swap="innerHTML"
>
  <label>
    Name:
    <input type="text" name="name" required />
  </label>
  <br /><br />
  <label>
    Email:
    <input type="email" name="email" required />
  </label>
  <br /><br />
  <button type="submit">Submit</button>
</form>

<div id="response"></div>


<div hx-target="this" hx-swap="outerHTML">
  <div><label>First Name</label>: Joe</div>
  <div><label>Last Name</label>: Blow</div>
  <div><label>Email</label>: joe@blow.com</div>
  <button hx-get="/api/clicked" class="btn primary">
  Click To Edit
  </button>
</div>

<form hx-put="/contact/1" hx-target="this" hx-swap="outerHTML">
  <div>
    <label>First Name</label>
    <input type="text" name="firstName" value="Joe">
  </div>
  <div class="form-group">
    <label>Last Name</label>
    <input type="text" name="lastName" value="Blow">
  </div>
  <div class="form-group">
    <label>Email Address</label>
    <input type="email" name="email" value="joe@blow.com">
  </div>
  <button class="btn">Submit</button>
  <button class="btn" hx-get="/contact/1">Cancel</button>
</form>