import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

const LoginRequired = ({ children }: PropsWithChildren) => {
  const tokon = localStorage.getItem("auth_token");
  if (!tokon) {
    return <Navigate to="/auth/login" replace />;
  }

  return <>{children}</>;
};

export default LoginRequired;
