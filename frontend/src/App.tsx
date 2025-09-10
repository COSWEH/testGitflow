import { ThemeProvider } from "@/context/ThemeProvider";
import { ModeToggle } from "@/components/ModeToggle";
import Home from "@/pages/Home";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Todo Application</h1>
            <ModeToggle />
          </div>
          <Home />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
