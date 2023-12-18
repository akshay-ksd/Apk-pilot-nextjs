import axios from "axios";
import { useState } from "react";
import { Endpoints } from "../../../endpoints/Endpoints";

const useGetAllProjects =()=>{
    const [loading,setLoading] = useState(false)

    const getAllProjects =async()=>{
        try {
            setLoading(true);
            const response = await axios.get(Endpoints.getAllProjects);
            const data = response?.data?.data
            return data
          } catch (error) {
            setLoading(false)
            alert("Network Error");
          } finally {
            setLoading(false);
          }
    }

    return [getAllProjects,loading]
};

export default useGetAllProjects;