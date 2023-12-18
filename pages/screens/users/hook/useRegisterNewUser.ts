import { useState } from "react";
import axios from "axios";
import { Endpoints } from "../../../endpoints/Endpoints";

const useRegisterNewUser = () => {
  const [loading, setLoading] = useState(false);

  const register = async (data:userSchema) => {
    try {
      setLoading(true);
      const response = await axios.post(Endpoints.registerNewUser, data);
      return response.data
    } catch (error) {
      console.error("Network Error:", error);
      alert("Network Error");
    } finally {
      setLoading(false);
    }
  };

  return [register, loading];
};

export default useRegisterNewUser;
