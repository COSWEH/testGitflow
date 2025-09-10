import { useTodos } from "@/hooks/useTodos";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import TodoStats from "./TodoStats";

const TodoList = () => {
  const {
    todos,
    addTodo,
    toggleTodo,
    updateTodo,
    deleteTodo,
    clearCompleted,
    getTodoStats,
  } = useTodos();

  const stats = getTodoStats();

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <TodoForm onAdd={addTodo} />

      <TodoStats stats={stats} onClearCompleted={clearCompleted} />

      <div className="space-y-3">
        {todos.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            No todos yet. Add one above to get started!
          </div>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onUpdate={updateTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
