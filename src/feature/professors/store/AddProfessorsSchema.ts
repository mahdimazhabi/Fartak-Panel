import * as yup from "yup";

export const AddProfessorsSchema = yup.object().shape({
  OnlinePrice: yup.string().required("هزینه کلاس آنلاین الزامی است"),
  InPersonPrice: yup.string().required("هزینه کلاس حضوری الزامی است"),
  City: yup.string().required("شهر تدریس استاد الزامی است"),
  Gender: yup
    .string()
    .oneOf(["0", "1"], "جنسیت اساتید الزامی است")
    .required("جنسیت اساتید الزامی است"),
  LanguageTeach: yup
    .string()
    .oneOf(["0", "1"], "زبان تدریس را انتخاب کنید")
    .required("زبان تدریس را انتخاب کنید"),
  TypeTeaching: yup
    .string()
    .oneOf(["0", "1"], "نوع تدریس را انتخاب کنید")
    .required("نوع تدریس را انتخاب کنید"),
  TeacherTypeId: yup.string().required("پایه تدریس را انتخاب کنید"),
  FileImage: yup.mixed(),
  Description: yup.string().required("توضیحات الزامی است"),
});
