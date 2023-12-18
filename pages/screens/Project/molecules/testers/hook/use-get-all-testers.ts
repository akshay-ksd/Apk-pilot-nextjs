import axios from "axios";
import { useState } from "react";
import { Endpoints } from "../../../../../endpoints/Endpoints";

const useGetAllTesters = () => {
  const [loading, setLoading] = useState(false);

  const getAllTesters = async () => {
    try {
      setLoading(true);
      // Construct the URL with the 'id' as a query parameter
      const response = await axios.get(`${Endpoints.getAllTesters}`);
      const data = response?.data?.data;
      return data;
    } catch (error) {
      setLoading(false);
      alert("Network Error");
    } finally {
      setLoading(false);
    }
  };

  return [getAllTesters, loading];
};

export default useGetAllTesters;
