import { ThemeProvider } from "@/context/ThemeProvider";
import { ModeToggle } from "@/components/ModeToggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto p-4">
          <div className="flex justify-end">
            <ModeToggle />
          </div>
          <h1 className="text-2xl font-bold">Add Theme Toggle</h1>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
