import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LockKeyhole, Smartphone } from "lucide-react";
import { LoginFormSchema } from "../schema/LoginFormSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const DataAdmin = { id: 1, phonenumber: "09152898703", password: "123456" };
  const navigate = useNavigate();

  type FormInput = yup.InferType<typeof LoginFormSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({ resolver: yupResolver(LoginFormSchema) });

  const generateToken = () => {
    return `token-${Math.random().toString(36).substr(2)}`;
  };

  const onSubmit: SubmitHandler<FormInput> = async (FormData) => {
    setLoading(true);

    if (
      FormData.phonenumber === DataAdmin.phonenumber &&
      FormData.password === DataAdmin.password
    ) {
      toast.success("خوش آمدید");

      const token = generateToken();
      localStorage.setItem("auth_token", token);

      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 2000);
    } else {
      toast.error("تلفن همراه یا رمز عبور اشتباه است");
      setLoading(false);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8">
          <div>
            <Input
              label="تلفن همراه"
              icon={Smartphone}
              variant="secondary"
              {...register("phonenumber")}
              error={errors.phonenumber}
              placeholder="تلفن همراه خود رو وارد کنید"
            />
          </div>
          <div>
            <Input
              label="رمز عبور"
              icon={LockKeyhole}
              variant="secondary"
              type="password"
              {...register("password")}
              error={errors.password}
              placeholder="رمز عبور خود را وارد کنید"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            loading={loading}
            className="w-[300px] bg-white mt-10 rounded-lg"
          >
            ورود
          </Button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
