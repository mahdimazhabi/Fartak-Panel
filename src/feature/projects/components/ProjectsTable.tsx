import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useApiProjects from "../api/useApiProjects";
import { useEffect } from "react";
import LineLoader from "@/shared/loader/loaders/LineLoader";
import { Trash } from "lucide-react";
import { Eye } from "lucide-react";
export const ProjectsTable = () => {
  const { DataProjectsList, LoadingProjectsLists, refetch } = useApiProjects();
  useEffect(() => {
    refetch();
  }, [DataProjectsList]);
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-lg">لیست اساتید</h1>
        </div>
        <div></div>
      </div>
      {LoadingProjectsLists && <LineLoader />}
      <Table className="text-xs">
        <TableHeader>
          <TableRow>
            <TableHead className="text-start ">عنوان</TableHead>
            <TableHead className="text-center"> قیمت</TableHead>
            <TableHead className="text-center">مدت</TableHead>
            <TableHead className="text-end"> عملیات </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DataProjectsList?.map((invoice) => (
            <TableRow key={invoice.projectTypeId}>
              <TableCell className="font-medium text-start">
                {invoice.title}
              </TableCell>
              <TableCell className="text-center">{invoice.price}</TableCell>
              <TableCell className="text-center">
                {invoice.duration / 1440 > 1
                  ? `${(invoice.duration / 1440).toFixed(0)} روز`
                  : "1 روز"}
              </TableCell>
              <TableCell className=" flex justify-end gap-2 text-center float-end">
                <Eye
                  size={14}
                  className=" cursor-pointer hover:text-blue-500"
                />
                <Trash
                  size={14}
                  className=" hover:text-red-500 cursor-pointer "
                  // onClick={() => remove(invoice.teacherUserId)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
