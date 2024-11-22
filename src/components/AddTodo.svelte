<script>
    import {addTodo} from "../stores/todos"
    let newTodo = $state("")
    const handleInputFunc = () => {
        addTodo(newTodo);
        newTodo = "";
    }
</script>

<h1>This is the Home page with a todo</h1>
<div>Add Todo</div>
<input type="text" bind:value={newTodo}>
<button onclick={handleInputFunc}>Add</button>