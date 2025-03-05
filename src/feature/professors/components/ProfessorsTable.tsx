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
export const ProfessorsTable = () => {
  const { data, refetch } = useProfessorsApi();
  useEffect(() => {
    refetch();
  }, [data]);
  return (
    <Table className="text-xs ">
      <TableHeader>
        <TableRow>
          <TableHead className="text-start ">اساتید</TableHead>
          <TableHead className="text-start">پایه تحصیلی</TableHead>
          <TableHead className="text-start">نوع تدریس</TableHead>
          <TableHead className="text-start">هزینه تدریس غیرحضوری</TableHead>
          <TableHead className="text-start">شهر</TableHead>
          <TableHead className="text-start">نوع تدریس </TableHead>
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
            <TableCell className="text-start">{invoice.onlinePrice}</TableCell>
            <TableCell className="text-start">{invoice.city}</TableCell>
            <TableCell className="text-start">
              {invoice.teacherTypeId}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableRow></TableRow>
    </Table>
  );
};
