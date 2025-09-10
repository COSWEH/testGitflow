import TodoList from "@/components/todo/TodoList";

const Home = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Todo App</h1>
        <p className="text-muted-foreground">
          Manage your tasks efficiently with our simple todo application
        </p>
      </div>

      <TodoList />
    </div>
  );
};

export default Home;
