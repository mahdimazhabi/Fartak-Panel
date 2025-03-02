import { RouteObject } from "react-router-dom";
import PanelLayout from "@/shared/layouts/PanelLayout";
import { SidebarProvider } from "@/components/ui/sidebar";

export const Routers: RouteObject[] = [
  {
    path: "/",
    element: (
      <SidebarProvider>
        <PanelLayout />
      </SidebarProvider>
    ),
    children: [],
  },
];
