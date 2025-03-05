import axios from "axios";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { getDataAllUser } from "../interface/interface";

const useUserApi = () => {
  const {
    data: DataUserAll,
    isLoading: LoadingUserData,
    refetch: RefetchDataAllUser,
  } = useQuery<getDataAllUser[]>({
    queryKey: ["AllDataUser"],
    queryFn: async () => {
      try {
        const response = await axios.post(
          "https://www.backend.fartakproject.ir/api/Users/GetAll",
          {},
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response) {
          return response.data.users;
        }
      } catch {
        console.log("error");
      }
    },
  });
  const remove = async (id: number) => {
    try {
      const response = await axios.delete(
        "https://www.backend.fartakproject.ir/api/Users/Delete",
        {
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            userId: id,
          },
        }
      );
      if (response) {
        await RefetchDataAllUser();
        toast.success("باموفقیت حذف گردید");
      }
    } catch {
      console.log("error");
    }
  };
  return { DataUserAll, LoadingUserData, RefetchDataAllUser, remove };
};

export default useUserApi;
