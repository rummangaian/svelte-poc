import { writable , type Writable} from "svelte/store";

interface Todo {
  id: string | number;
  text: string;
  completed: boolean;
}

export const todos:Writable<Todo[]> = writable([
  { id: 1, text: "Learn Svelte", completed: false },
  { id: 2, text: "Build a To-Do App", completed: true },
]);

export const addTodo = (text: string): void => {
  todos.update((currentTodo: Todo[]) => [
    ...currentTodo,
    {
      id: Date.now(),
      text,
      completed: false,
    },
  ]);
};
