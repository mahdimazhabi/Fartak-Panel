import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import logo from "@/assets/logo/logo.png";
const AuthenticationLayout = () => {
  return (
    <div className="flex justify-center min-h-screen bg-dominant-primary ">
      <div className="w-full max-w-xl px-4">
        <div className="flex justify-center mb-1.5  ">
          <img src={logo} alt="لوگو  فرتاک" className="w-[250px]  " />
        </div>

        <main>
          <Toaster />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthenticationLayout;
