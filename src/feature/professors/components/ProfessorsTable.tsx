import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useProfessorsApi from "../api/useProfessorsApi";
import { useEffect } from "react";
import LineLoader from "@/shared/loader/loaders/LineLoader";
import { Trash } from "lucide-react";
export const ProfessorsTable = () => {
  const { data, refetch, isLoading, remove } = useProfessorsApi();
  useEffect(() => {
    refetch();
  }, [data]);
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-lg">لیست اساتید</h1>
        </div>
        <div></div>
      </div>
      {isLoading && <LineLoader />}
      <Table className="text-xs">
        <TableHeader>
          <TableRow>
            <TableHead className="text-start ">اساتید</TableHead>
            <TableHead className="text-start">پایه تحصیلی</TableHead>
            <TableHead className="text-start">نوع تدریس</TableHead>
            <TableHead className="text-start">هزینه تدریس غیرحضوری</TableHead>
            <TableHead className="text-start">شهر</TableHead>
            <TableHead className="text-start">نوع تدریس </TableHead>
            <TableHead>عملیات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((invoice) => (
            <TableRow key={invoice.userId}>
              <TableCell className="font-medium text-start">
                {invoice.teacherName}
              </TableCell>
              <TableCell className="text-start">
                {invoice.teacherTypeTitle}
              </TableCell>
              <TableCell className="text-start">
                {invoice.typeTeaching === 0 ? (
                  <span>غیرحضوری</span>
                ) : (
                  <span>حضوری</span>
                )}
              </TableCell>
              <TableCell className="text-start">
                {invoice.onlinePrice}
              </TableCell>
              <TableCell className="text-start">{invoice.city}</TableCell>
              <TableCell className="text-start">
                {invoice.teacherTypeId}
              </TableCell>
              <TableCell className="flex items-center w-full  justify-center">
                <Trash
                  size={14}
                  className="float-start hover:text-red-500"
                  onClick={() => remove(invoice.teacherUserId)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
