import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useProfessorsApi from "../api/useProfessorsApi";

export const  ProfessorsTable = ()=> {
  const { data } = useProfessorsApi();
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((invoice) => (
          <TableRow key={invoice.userId}>
            <TableCell className="font-medium">{invoice.teacherName}</TableCell>
            <TableCell>{invoice.teacherTypeTitle}</TableCell>
            <TableCell>{invoice.typeTeaching}</TableCell>
            <TableCell className="text-right">{invoice.onlinePrice}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
