export interface Todo {
  id: string;
  isComplete?: boolean;
  desc?: string;
}

export interface State {
  todos: Todo[];
  selectedTodo: string | null;
  counter: number;
}
