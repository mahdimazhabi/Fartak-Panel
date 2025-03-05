import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useUserApi from "../api/useUserApi";
import { useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
import LineLoader from "@/shared/loader/loaders/LineLoader";
import { Trash } from "lucide-react";
export const UserTable = () => {
  const { DataUserAll, LoadingUserData, RefetchDataAllUser, remove } =
    useUserApi();
  //   const navigate = useNavigate();
  useEffect(() => {
    RefetchDataAllUser();
  }, [DataUserAll]);
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-lg">لیست کاربران</h1>
        </div>
        {/* <div>
          <Button
            className="bg-white rounded "
            onClick={() => navigate("/Professors/add", { replace: true })}
          >
            ثبت سریع استاد
          </Button>
        </div> */}
      </div>
      {LoadingUserData && <LineLoader />}
      <Table className="text-xs">
        <TableHeader>
          <TableRow>
            <TableHead className="text-start ">نام و نام خانوادگی</TableHead>
            <TableHead className="text-center">شماره تلفن</TableHead>
            <TableHead className="text-center">ادرس ایمیل</TableHead>
            <TableHead>رمز عبور</TableHead>
            <TableHead className="text-center">عملیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DataUserAll?.map((invoice) => (
            <TableRow key={invoice.userId}>
              <TableCell className="font-medium text-start">
                {invoice.name} {invoice.lastname}
              </TableCell>
              <TableCell className="text-center">{invoice.mobile}</TableCell>

              <TableCell className="text-center">{invoice.email}</TableCell>
              <TableCell className="text-center">{invoice.passWord}</TableCell>
              {/* <TableCell className="text-center">{invoice.salt}</TableCell> */}
              <TableCell className="flex items-center w-full  justify-center">
                <Trash
                  size={14}
                  className=" hover:text-red-500"
                  onClick={() => remove(invoice.userId)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableRow></TableRow>
      </Table>
    </div>
  );
};
