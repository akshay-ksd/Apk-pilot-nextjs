import React, { FC, useState } from "react";
import useCreateProject from "../../../screens/Home/hook/useCreateProject";
interface form {
  closeModel: () => void;
}

const ProjectCreationForm: FC<form> = ({ closeModel }) => {
  const role = {
    Tester: 1,
    Lead: 2,
    Manager: 3,
    Developer: 4,
  };
  const [create, loading] = useCreateProject();

  const [formData, setFormData] = useState({
    project_name: "",
    description: "",
    developers: [], // Default role is Tester
    project_thumbnail:
      "https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png",
    versions: [],
    testers: [],
  });

  const [errors, setErrors] = useState({
    project_name: "",
    description: "",
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
    e.preventDefault();
    // if(validateForm()){
    const user = await create(formData);
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
          Create New Project
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="project_name"
              className="block text-primaryText font-medium text-[12px] mt-2 "
            >
              Project Name
            </label>
            <input
              type="text"
              id="project_name"
              name="project_name"
              value={formData.project_name}
              onChange={handleChange}
              className="w-full p-2 border border-grayText mt-2 rounded text-[12px] "
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="Description"
              className="block text-primaryText font-medium text-[12px] mt-2 "
            >
              Description
            </label>
            <textarea
              type="description"
              id="description"
              name="description"
              value={formData.description}
              list={true}
              onChange={handleChange}
              className="w-full p-2 border border-grayText mt-2 rounded text-[12px] h-20"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-opacity-80 mt-10 shadow-md text-md"
          >
            Create
          </button>
        </form>
        <button
          onClick={() => closeModel(false)}
          className="mt-4 w-full bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 text-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectCreationForm;
