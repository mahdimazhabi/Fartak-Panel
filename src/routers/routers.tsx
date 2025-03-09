import { RouteObject } from "react-router-dom";
import PanelLayout from "@/shared/layouts/PanelLayout";
import { SidebarProvider } from "@/components/ui/sidebar";
import ProfessorsPage from "@/feature/professors/page/ProfessorsPage";
import { ProfessorsTable } from "@/feature/professors/components/ProfessorsTable";
import ProfessorsAdd from "@/feature/professors/components/ProfessorsAdd";
import UserPage from "@/feature/user/page/UserPage";
import { UserTable } from "@/feature/user/components/UserTable";
import { Navigate } from "react-router-dom";
import AuthenticationLayout from "@/shared/layouts/AuthenticationLayout/AuthenticationLayout";
import Login from "@/feature/Authentication/components/Login";
import LoginRequired from "@/shared/required/LoginRequired";

export const Routers: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="/auth/login" replace />,
  },
  {
    path: "/auth",
    element: <AuthenticationLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <LoginRequired>
        <SidebarProvider>
          <PanelLayout />
        </SidebarProvider>
      </LoginRequired>
    ),
    children: [
      {
        path: "professors",
        element: <ProfessorsPage />,
        children: [
          { path: "lists", element: <ProfessorsTable /> },
          { path: "add/:userid", element: <ProfessorsAdd /> },
        ],
      },
      {
        path: "user",
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
