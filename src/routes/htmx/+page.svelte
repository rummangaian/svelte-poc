<div>
  <form>

    <input type="email" name="userEmail" />
    
    <input type="password" name="userPassword" />
 
    <button hx-post="/api">
     Submit
   </button>
 
 </form>


 <button hx-get="/api" hx-swap="outerHTML" 
 hx-target="#parent-div">
    Click Me!
</button>
<!-- have a button POST a click via AJAX -->
<button  hx-get="/api" hx-swap="outerHTML">
  api
</button>

<div id="parent-div"></div>
</div>