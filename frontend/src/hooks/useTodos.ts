import { useCallback } from "react";
import type { Todo } from "@/types/todo";
import { useLocalStorage } from "./useLocalStorage";

export function useTodos() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const addTodo = useCallback(
    (text: string) => {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text: text.trim(),
        completed: false,
        dateCreated: new Date().toISOString(),
      };
      setTodos((prev) => [...prev, newTodo]);
    },
    [setTodos]
  );

  const toggleTodo = useCallback(
    (id: string) => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    [setTodos]
  );

  const updateTodo = useCallback(
    (id: string, text: string) => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, text: text.trim() } : todo
        )
      );
    },
    [setTodos]
  );

  const deleteTodo = useCallback(
    (id: string) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    },
    [setTodos]
  );

  const clearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  }, [setTodos]);

  const getTodoStats = useCallback(() => {
    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  }, [todos]);

  return {
    todos,
    addTodo,
    toggleTodo,
    updateTodo,
    deleteTodo,
    clearCompleted,
    getTodoStats,
  };
}
