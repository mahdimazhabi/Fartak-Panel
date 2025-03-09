import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const IsLogin = ({ children }: PropsWithChildren) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    <Navigate to={"/dashboard"} />;
  }
  return <>{children}</>;
};

export default IsLogin;
