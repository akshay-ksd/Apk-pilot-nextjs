import axios from "axios";
import { useState } from "react";
import { Endpoints } from "../../../endpoints/Endpoints";

const useGetAllUsers =()=>{
    const [loading,setLoading] = useState(false)

    const getAllUsers =async()=>{
        try {
            setLoading(true);
            const response = await axios.get(Endpoints.getAllUsers);
            const data = response?.data?.data
            return data
          } catch (error) {
            setLoading(false)
            alert("Network Error");
          } finally {
            setLoading(false);
          }
    }

    return [getAllUsers,loading]
};

export default useGetAllUsers;