import axios from "axios";
import { useState } from "react";
import { Endpoints } from "../../../endpoints/Endpoints";

const useGetBuild = () => {
  const [loading, setLoading] = useState(false);

  const getBuild = async (details) => { // Accept the 'id' as a parameter
    const queryParams = new URLSearchParams(details).toString();
    try {
      setLoading(true);
      // Construct the URL with the 'id' as a query parameter
      const response = await axios.get(`${Endpoints.getBuild}?${queryParams}`);
      const data = response?.data?.data;
      return data;
    } catch (error) {
      setLoading(false);
      alert("Network Error");
    } finally {
      setLoading(false);
    }
  };

  return [getBuild, loading];
};

export default useGetBuild;
