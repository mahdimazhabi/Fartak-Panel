import LoginForm from "../form/LoginForm";
import { Card } from "@/components/ui/card";

const Login = () => {
  return (
    <>
      <Card className="px-0 bg-white/15   text-right border border-amber-300 rounded-sm sm:bg-complement-primary sm:p-10">
        <h1 className="mb-10">ورود</h1>
        <LoginForm />
      </Card>
    </>
  );
};

export default Login;
