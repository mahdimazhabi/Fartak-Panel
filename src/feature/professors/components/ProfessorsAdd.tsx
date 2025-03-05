import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProfessorsAdd = () => {
  return (
    <form>
      <div>
        <div>
          <Input />
        </div>
        <div>
          <Input label="شهر" placeholder="لطفا شهر را وارد کنید" />
        </div>
      </div>
    </form>
  );
};

export default ProfessorsAdd;
