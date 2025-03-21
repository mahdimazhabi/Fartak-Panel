import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { DataAllProjects } from "../interface/interface";
import { toast } from "sonner";
const useApiProjects = () => {
  const {
    data: DataProjectsList,
    isLoading: LoadingProjectsLists,
    refetch,
  } = useQuery<DataAllProjects[]>({
    queryKey: ["getAllDataListProjects"],
    queryFn: async () => {
      try {
        const response = await axios.post(
          "https://www.backend.fartakproject.ir/api/Projects/GetAll",
          {},
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response) {
          return response.data.projects;
        }
      } catch {
        console.log("error");
      }
    },
  });
  const remove = async (id: number) => {
    try {
      const response = await axios.delete(
        "https://www.backend.fartakproject.ir/api/Projects/Delete",
        {
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            projectId: id,
          },
        }
      );
      if (response) {
        await refetch();
        toast("با موفقیت حذف شد");
      }
    } catch {
      console.log("error");
    }
  };
  return { DataProjectsList, LoadingProjectsLists, refetch, remove };
};

export default useApiProjects;
