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
import { Input } from "@/components/ui/input";
import LineLoader from "@/shared/loader/loaders/LineLoader";
import { Trash } from "lucide-react";
import { useSearchStore } from "../store/SearchUserStore";
import { Search } from "lucide-react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export const UserTable = () => {
  const { setSearchWord } = useSearchStore();
  const navigate = useNavigate();
  const { DataUserAll, LoadingUserData, RefetchDataAllUser, remove } =
    useUserApi();
  useEffect(() => {
    RefetchDataAllUser();
  }, [DataUserAll]);

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-lg">لیست کاربران</h1>
        </div>
        <div>
          <Input
            icon={Search}
            iconPosition="left"
            placeholder="جستجوی کابران..."
            className="bg-white rounded "
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          />
        </div>
      </div>
      {LoadingUserData && <LineLoader />}
      {DataUserAll && DataUserAll.length > 0 ? (
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
                <TableCell className="text-center">
                  {invoice.passWord}
                </TableCell>
                {/* <TableCell className="text-center">{invoice.salt}</TableCell> */}
                <TableCell className="flex items-center w-full gap-2  justify-center">
                  <Trash
                    size={14}
                    className=" hover:text-red-500"
                    onClick={() => remove(invoice.userId)}
                  />
                  <FaChalkboardTeacher
                    size={14}
                    className="hover:text-blue-400"
                    onClick={() =>
                      navigate(`/Professors/add/${invoice.userId}`)
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="flex justify-center mt-20">
          <span>کاربری یافت نشد</span>
        </div>
      )}
    </div>
  );
};
