import axios from "axios";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { getDataAllUser } from "../interface/interface";
import { useSearchStore } from "../store/SearchUserStore";

const useUserApi = () => {
  const { SearchWord } = useSearchStore();
  const {
    data: DataUserAll,
    isLoading: LoadingUserData,
    refetch: RefetchDataAllUser,
  } = useQuery<getDataAllUser[]>({
    enabled: SearchWord != null && SearchWord.length > 2,
    queryKey: ["AllDataUser", SearchWord],
    queryFn: async ({ queryKey }) => {
      const searchWord = queryKey[1] as string;
      if (searchWord) {
        try {
          const response = await axios.post(
            "https://www.backend.fartakproject.ir/api/Users/GetByNameTeacher",
            { fullName: searchWord },
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
      } else {
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

  return {
    DataUserAll,
    LoadingUserData,
    RefetchDataAllUser,
    remove,
  };
};

export default useUserApi;
