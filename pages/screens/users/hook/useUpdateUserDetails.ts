import axios from "axios";
import { Endpoints } from "../../../endpoints/Endpoints";
import { useState } from "react";

const useUpdateUserDetails =()=>{
    const [loading, setLoading] = useState(false);

    const update = async (data:userSchema) => {
      try {
        setLoading(true);
        const response = await axios.put(Endpoints.updateUser, data);
        return response.data
      } catch (error) {
        console.error("Network Error:", error);
        alert("Network Error");
      } finally {
        setLoading(false);
      }
    };
  
    return [update, loading];
};

export default useUpdateUserDetails;