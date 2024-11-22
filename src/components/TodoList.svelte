<script>
    import {todos} from "../stores/todos"
</script>

<h5>TodoList</h5>

<div>
    {#each $todos as todo (todo.id)}
        <div>{todo.text}</div>
    {/each}
</div>