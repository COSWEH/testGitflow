export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  dateCreated: string;
}

export interface TodoStats {
  total: number;
  completed: number;
  pending: number;
}

export type TodoAction =
  | "add"
  | "toggle"
  | "update"
  | "delete"
  | "clear-completed";
