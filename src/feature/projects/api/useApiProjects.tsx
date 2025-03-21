import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { DataAllProjects } from "../interface/interface";
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
  return { DataProjectsList, LoadingProjectsLists, refetch };
};

export default useApiProjects;
