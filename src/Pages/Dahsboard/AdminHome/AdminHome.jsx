import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure ";

const AdminHome = () => {
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-status"],
    queryFn: async () => {
      const res = await axiosSecure();
      return res.data;
    },
  });
  return (
    <div className="w-full m-4">
      <h1 className="text-3xl font-semibold">Hi, {user?.displayName}</h1>
    </div>
  );
};

export default AdminHome;
