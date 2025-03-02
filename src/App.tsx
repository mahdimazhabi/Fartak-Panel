import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ThemeProvider from "./shared/providers/ThemeProvider";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Routers } from "./routers/routers";

const App = () => {
  const router = createBrowserRouter(Routers);

  return (
    <ThemeProvider>
      <TooltipProvider delayDuration={0}>
        <RouterProvider router={router} />
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
