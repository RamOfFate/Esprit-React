import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./pages/AppSidebar";
import { TooltipProvider } from "./components/ui/tooltip";
import { EXERCISES } from "./models/Exercice";
import { ThemeProvider } from "./components/theme-provider";
import NotFound from "./pages/NotFound";
import EventDetails from "./pages/atelier2-partie2/EventDetails";
import EventDetailsAxios from "./pages/atelier3/EventDetailsAxios";
import AddEvent from "./pages/atelier3/AddEvent";
import UpdateEvent from "./pages/atelier3/UpdateEvent";

function Layout() {
  return (
    <SidebarProvider>
      <TooltipProvider>
        <div className="flex min-h-screen w-full font-mono bg-background">
          <AppSidebar />
          <main className="flex-1 flex flex-col">
            <header className="flex h-16 items-center border-b px-6 gap-4">
              <SidebarTrigger />
              <div className="h-4 w-px bg-border" />
              <span className="text-sm font-medium text-muted-foreground">
                Tarek Msolli
              </span>
            </header>

            <div className="p-6 flex-1">
              <Outlet />
            </div>
          </main>
        </div>
      </TooltipProvider>
    </SidebarProvider>
  );
}

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />

            {EXERCISES.map((ex) => (
              <Route key={ex.id} path={ex.path} element={<ex.component />} />
            ))}
            <Route
              path="/composants-fonctionnels-routage/ex2/:eventName"
              element={<EventDetails />}
            ></Route>
            <Route path="/axios/ex1/:eventName" element={<EventDetailsAxios />}></Route>
            <Route path="/axios/ex1/add" element={<AddEvent />}></Route>
            <Route path="/axios/ex1/edit/:id" element={<UpdateEvent />}></Route>
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
