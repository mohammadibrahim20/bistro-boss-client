import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure ";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access_token");
  const [axiosSecure] = useAxiosSecure();

  const {
    isLoading,
    isError,
    refetch,
    data: cart = [],
    error,
  } = useQuery({
    queryKey: ["carts", user?.email],

    queryFn: async () => {
      const response = await axiosSecure(`/carts?email=${user?.email}`)
      return response.data;
    },
    // queryFn: async () => {
    //   const response = await fetch(
    //     `http://localhost:5000/carts?email=${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `Bearer ${token}`,
    //       },
    //     }
    //   );
    //   return response.json();
    // },
  });
  return [cart, refetch];
};
export default useCart;
