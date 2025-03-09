import * as yup from "yup";

export const LoginFormSchema = yup.object().shape({
  phonenumber: yup.string().required("تلفن همراه الزامی است"),
  password: yup.string().required("رمز عبور الزامی است"),
});
