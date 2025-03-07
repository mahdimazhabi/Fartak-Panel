import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getAlldataTypeTeacher } from "../interface/interface";

const useTypeTeacherApi = () => {
  const { data, isLoading } = useQuery<getAlldataTypeTeacher[]>({
    queryKey: ["getalltypeteacherparent"],
    queryFn: async () => {
      try {
        const response = await axios.post(
          "https://www.backend.fartakproject.ir/api/TeacherTypes/GetAllParent",
          {},
          { headers: { "Content-Type": "application/json" } }
        );
        if (response) {
          return response.data.teacherTypes;
        }
      } catch {
        console.log("errore");
      }
    },
  });
  return { data, isLoading };
};

export default useTypeTeacherApi;
