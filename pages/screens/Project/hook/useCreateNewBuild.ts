import { useState } from "react";
import axios from "axios";
import { Endpoints } from "../../../endpoints/Endpoints";

const useCreateNewBuild = () => {
  const [loading, setLoading] = useState(false);

  const create = async (data:userSchema) => {
    try {
      setLoading(true);
      const response = await axios.post(Endpoints.createBuild, data);
      return response.data
    } catch (error) {
      console.error("Network Error:", error);
      alert("Network Error");
    } finally {
      setLoading(false);
    }
  };

  return [create, loading];
};

export default useCreateNewBuild;
