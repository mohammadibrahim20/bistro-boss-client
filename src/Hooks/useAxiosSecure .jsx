import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const accessToken = localStorage.getItem("access_token");

      // Inject authorization header with the access token
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    });

    // Add an interceptor for responses
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && [401, 403].includes(error.response.status)) {
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, logOut, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
