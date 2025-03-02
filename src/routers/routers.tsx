import { RouteObject } from "react-router-dom";
import PanelLayout from "@/shared/layouts/PanelLayout";
import { SidebarProvider } from "@/components/ui/sidebar";
import ProfessorsPage from "@/feature/professors/page/ProfessorsPage";
import { ProfessorsTable } from "@/feature/professors/components/ProfessorsTable";

export const Routers: RouteObject[] = [
  {
    path: "/",
    element: (
      <SidebarProvider>
        <PanelLayout />
      </SidebarProvider>
    ),
    children: [
      {
        path: "/Professors",
        element: <ProfessorsPage />,
        children: [{ path: "lists", element: <ProfessorsTable /> }],
      },
    ],
  },
];
