import React, { FC, useEffect, useState } from "react";
import { incrementVersion } from "../../../../functions/VersionIncrement";
import useCreateVersion from "../../hook/useCreateNewVersion";
interface form {
  closeModel: () => void;
  lastVersion: string;
  pData: {}
}

const NewVersionForm: FC<form> = ({ closeModel, lastVersion, pData }) => {
  const role = {
    Tester: 1,
    Lead: 2,
    Manager: 3,
    Developer: 4,
  };
  const [create, loading] = useCreateVersion();
  const [formData, setFormData] = useState({
    version_number: incrementVersion(lastVersion),
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
        _id: pData?._id,
        ...formData
    }
    const version = await create(data);
    if (version) {
      closeModel(version);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 w-full bg-secondaryBackground">
      {/* <ToastContainer /> */}

      <div className="bg-white p-10 rounded shadow-md w-96 animate-fade-in">
        <h2 className="text-lg font-semibold text-center text-primary mb-4">
          New Version
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-primaryText font-medium text-[12px] mt-2 "
            >
              Version Number
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.version_number}
              onChange={handleChange}
              className="w-full p-2 border border-grayText mt-2 rounded text-[12px] "
              required
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-primaryText font-medium text-[12px] mt-2 "
            >
              Description
            </label>
            <textarea
              type="description"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-grayText mt-2 rounded text-[12px] "
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-opacity-80 mt-10 shadow-md text-sm"
          >
            Create
          </button>
        </form>
        <button
          onClick={() => closeModel(false)}
          className="mt-4 w-full bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NewVersionForm;
