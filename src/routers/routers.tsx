import { RouteObject } from "react-router-dom";
import PanelLayout from "@/shared/layouts/PanelLayout";
import { SidebarProvider } from "@/components/ui/sidebar";
import ProfessorsPage from "@/feature/professors/page/ProfessorsPage";
import { ProfessorsTable } from "@/feature/professors/components/ProfessorsTable";
import ProfessorsAdd from "@/feature/professors/components/ProfessorsAdd";
import UserPage from "@/feature/user/page/UserPage";
import { UserTable } from "@/feature/user/components/UserTable";
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
        children: [
          { path: "lists", element: <ProfessorsTable /> },
          { path: "add/:userid", element: <ProfessorsAdd /> },
        ],
      },
      {
        path: "/user",
        element: <UserPage />,
        children: [
          {
            path: "lists",
            element: <UserTable />,
          },
        ],
      },
    ],
  },
];
