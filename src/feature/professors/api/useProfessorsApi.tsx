import axios from "axios";
import { getdataprofessors } from "../interface/interface";
import { useQuery } from "@tanstack/react-query";

const useProfessorsApi = () => {
  const { data, isLoading, refetch } = useQuery<getdataprofessors[]>({
    queryKey: ["getdataTeacherUsers"],
    queryFn: async () => {
      try {
        const response = await axios.post(
          "https://www.backend.fartakproject.ir/api/TeacherUsers/GetAll",
          {},
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response) {
          console.log(response);
          return response.data.teacherUsers;
        }
      } catch {
        console.log("error");
      }
    },
  });

  const add = async (data: any) => {
    try {
      const response = await axios.post(
        "https://www.backend.fartakproject.ir/api/TeacherUsers/Add",
        {
          data,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response) {
        console.log(response);
        return response.data;
      }
    } catch {
      console.log("error");
    }
  };

  const remove = async (id: number) => {
    try {
      const response = await axios.delete(
        "https://www.backend.fartakproject.ir/api/TeacherUsers/Delete",
        {
          params: {
            teacherUserId: id,
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response) {
        console.log(response);
        return response.data;
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const edit = async (data: any) => {
    try {
      const response = await axios.put(
        "https://www.backend.fartakproject.ir/api/TeacherUsers/Edit",
        { data },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response) {
        console.log("true");
        return response;
      }
    } catch {
      console.log("error");
    }
  };

  return { add, data, isLoading, refetch, remove, edit };
};

export default useProfessorsApi;
