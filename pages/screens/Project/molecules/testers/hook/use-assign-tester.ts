import { useState } from "react";
import axios from "axios";
import { Endpoints } from "../../../../../endpoints/Endpoints";

const useAssignTester = () => {
  const [assignLoad, setload] = useState(false);

  const assign = async (data:any) => {
    try {
      setload(true);
      const response = await axios.put(Endpoints.assignTester, data);
      return response.data?.data
    } catch (error) {
      console.error("Network Error:", error);
      alert("Network Error");
    } finally {
      setload(false);
    }
  };

  return [assign, assignLoad];
};

export default useAssignTester;
