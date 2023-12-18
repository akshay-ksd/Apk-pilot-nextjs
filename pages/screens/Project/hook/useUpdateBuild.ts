import { useState } from "react";
import axios from "axios";
import { Endpoints } from "../../../endpoints/Endpoints";

const useUpdateBuild = () => {
  const [load, setload] = useState(false);

  const update = async (data:any) => {
    try {
      setload(true);
      const response = await axios.put(Endpoints.updateBuild, data);
      return response.data?.data
    } catch (error) {
      console.error("Network Error:", error);
      alert("Network Error");
    } finally {
      setload(false);
    }
  };

  return [update, load];
};

export default useUpdateBuild;
