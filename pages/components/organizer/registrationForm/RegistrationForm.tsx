import React, { FC, useState } from "react";
import useRegisterNewUser from "../../../screens/users/hook/useRegisterNewUser";

interface form {
  closeModel: () => void;
}

const RegistrationForm: FC<form> = ({ closeModel }) => {
  const role = {
    Tester: 1,
    Lead: 2,
    Manager: 3,
    Developer: 4,
  };
  const [register, loading] = useRegisterNewUser();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "Tester", // Default role is Tester
    password: "",
    userThumbnail: "https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (formData.username.trim() === "") {
      newErrors.username = "Username is required";
      valid = false;
    } else {
      newErrors.username = "";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      valid = false;
    } else {
      newErrors.email = "";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    } else {
      newErrors.password = "";
      newErrors.confirmPassword = "";
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    let data = formData;
    data.role = role[formData?.role];
    e.preventDefault();
    // if(validateForm()){
    const user = await register(formData);
    if (user) {
     

      closeModel(user);
    }
    // }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 w-full bg-secondaryBackground">
      {/* <ToastContainer /> */}

      <div className="bg-white p-10 rounded shadow-md w-96 animate-fade-in">
        <h2 className="text-lg font-semibold text-center text-primary mb-4">
          User Registration
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-primaryText font-medium text-[12px] mt-2 "
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-grayText mt-2 rounded text-[12px] "
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-primaryText font-medium text-[12px] mt-2 "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-grayText mt-2 rounded text-[12px] "
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-primaryText font-medium text-[12px] mt-2 "
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border border-grayText mt-2 rounded text-[12px] "
              required
            >
              <option value="Tester">Tester</option>
              <option value="Lead">Lead</option>
              <option value="Manager">Manager</option>
              <option value="Developer">Developer</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-primaryText font-medium text-[12px] mt-2 "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-grayText mt-2 rounded text-[12px] "
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-primaryText font-medium text-[12px] mt-2 "
            >
              Re-enter Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border border-grayText mt-2 rounded text-[12px] "
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-opacity-80 mt-10 shadow-md text-md"
          >
            Register
          </button>
        </form>
        <button
          onClick={()=>closeModel(false)}
          className="mt-4 w-full bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 text-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
