import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams } from "react-router-dom";
import useTypeTeacherApi from "@/shared/api/useTypeTeacherApi";
import { Textarea } from "@/components/ui/textarea";
import { AddProfessorsSchema } from "../store/AddProfessorsSchema";
import * as yup from "yup";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useProfessorsApi from "../api/useProfessorsApi";
import { useNavigate } from "react-router-dom";
const ProfessorsAdd = () => {
  const { userid } = useParams();
  const { data } = useTypeTeacherApi();
  const [waiting, setWaiting] = useState<boolean>(false);
  const { add } = useProfessorsApi();
  const navigate = useNavigate();
  type IFormInput = yup.InferType<typeof AddProfessorsSchema>;

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(AddProfessorsSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const Alldata = new FormData();

    if (data.FileImage && data.FileImage[0]) {
      Alldata.append("FileImage", data.FileImage[0]);
    }

    Alldata.append("UserId", userid!);

    Object.entries(data).forEach(([key, value]) => {
      if (key !== "FileImage" && value !== undefined && value !== null) {
        Alldata.append(key, String(value));
      }
    });

    console.log("FormData:", Object.fromEntries(Alldata.entries()));

    try {
      setWaiting(true);
      const response = await add(Alldata);
      if (response) {
        setTimeout(() => {
          navigate("/Professors/lists", { replace: true });
        }, 3000);
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setWaiting(false);
      reset();
    }
  };

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-lg">اضافه کردن استاد</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-5 items-start w-full">
          <div>
            <Input
              label="قیمت آنلاین"
              variant={"secondary"}
              placeholder="هزینه برگزاری کلاس آنلاین را وارد کنید"
              className="w-full"
              {...register("OnlinePrice")}
              error={errors.OnlinePrice}
            />
          </div>
          <div>
            <Input
              label="قیمت حضوری"
              variant={"secondary"}
              placeholder="هزینه برگزاری کلاس حضوری را وارد کنید"
              className="w-full"
              {...register("InPersonPrice")}
              error={errors.InPersonPrice}
            />
          </div>
          <div>
            <Input
              label="شهر"
              type="text"
              placeholder="لطفا شهر را وارد کنید"
              variant={"secondary"}
              {...register("City")}
              error={errors.City}
            />
          </div>
          <div>
            <label className="text-sm">جنسیت</label>
            <Controller
              name="Gender"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="جنسیت موردنظر را انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">مرد</SelectItem>
                    <SelectItem value="0">زن</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.Gender && (
              <span className="text-red-500 text-xs mt-2">
                {errors.Gender.message}
              </span>
            )}
          </div>
          <div>
            <label className="text-sm">زبان تدریس</label>
            <Controller
              name="LanguageTeach"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="زبان تدریس موردنظر را انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">فارسی</SelectItem>
                    <SelectItem value="1">انگلیسی</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.LanguageTeach && (
              <span className="text-red-500 text-xs mt-2">
                {errors.LanguageTeach.message}
              </span>
            )}
          </div>
          <div>
            <label className="mb-2 text-sm">پایه تدریس</label>
            <Controller
              name="TeacherTypeId"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder="پایه تدریس موردنظر را انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent>
                    {data?.map((item) => (
                      <SelectItem
                        key={item.teacherTypeId}
                        value={item.teacherTypeId.toString()}
                      >
                        {item.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.TeacherTypeId && (
              <span className="text-red-500 text-xs mt-2">
                {errors.TeacherTypeId.message}
              </span>
            )}
          </div>
          <div>
            <label className="mb-2 text-sm">نوع تدریس</label>
            <Controller
              name="TypeTeaching"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full mt-2">
                    <SelectValue placeholder="نوع تدریس موردنظر را انتخاب کنید" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">آنلاین</SelectItem>
                    <SelectItem value="1">حضوری</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.TeacherTypeId && (
              <span className="text-red-500 text-xs mt-2">
                {errors.TeacherTypeId.message}
              </span>
            )}
          </div>
          <div>
            <Input
              label="پروفایل"
              variant={"secondary"}
              placeholder="پروفایل کاربر را وارد کنید"
              className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-complement-primary file:text-complement-300 hover:file:bg-complement-200 file:cursor-pointer bg-white"
              type="file"
              {...register("FileImage")}
            />
          </div>
        </div>
        <div>
          <Textarea
            label="توضیحات"
            placeholder="نوضیحات مورد نظر خود را وارد کنید"
            {...register("Description")}
            error={errors.Description}
            typeof="text"
          />
        </div>
        <div className="flex justify-center mt-20">
          <Button
            type="submit"
            loading={waiting}
            className="w-[150px] bg-white rounded"
          >
            ایجاد
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfessorsAdd;
