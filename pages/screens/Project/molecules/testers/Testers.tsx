import React, { FC, useEffect, useState } from "react";
import useGetAllTesters from "./hook/use-get-all-testers";
import useAssignTester from "./hook/use-assign-tester";

const Testers: FC<any> = ({ build }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null); // Set the default value to "Assign"

  const [getAllTesters, loading] = useGetAllTesters();
  const [assign, assignLoad] = useAssignTester();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    let d = await getAllTesters();
    d.unshift({ username: "None" });
    setUsers(d);

    // Update tester
    const testerId = build?.testers.length ? build?.testers[0] : null;
    if (testerId) {
      const testerName = d.find((x) => x?._id === testerId)?.username;
      setSelectedAvatar(testerName);
    } else {
      setSelectedAvatar(null); // Set to "Assign" if no tester is selected
    }
  };

  const handleAvatarChange = async (event) => {
    if (event.target.value !== "None") {
      setSelectedAvatar(event.target.value);

      const data = {
        _id: build?._id,
        testerId: users.find((x) => x?.username === event.target.value)?._id,
        task: "ADD",
      };
      const result = await assign(data);
      if (result) {
        // Handle the result here
      }
    } else {
      setSelectedAvatar(null);
      const data = {
        _id: build?._id,
        testerId: users.find((x) => x?.username === event.target.value)?._id,
        task: "REMOVE",
      };
      const result = await assign(data);
      if (result) {
        // Handle the result here
      }
    }
  };

  return (
    <div className="w-full flex items-center justify-start overflow-x-hidden ml-3">
      <select
        value={selectedAvatar}
        onChange={handleAvatarChange}
        className={`bg-transparent border ${
          selectedAvatar ? "border-secondary" : "border-lightGray"
        } rounded-md px-4 py-2 ${
          selectedAvatar ? "text-white" : "text-primaryText"
        } font-primary ${selectedAvatar ? "bg-secondary" : "bg-white"}`}
        style={{ fontSize: "12px", outline: "none" }}
      >
        {users.map((x) => (
          <>
            <option value={x?.username} key={x?.username}>
              {x?.username == "None"
                ? selectedAvatar
                  ? "None"
                  : "Assign"
                : x?.username}
            </option>
          </>
        ))}
      </select>
    </div>
  );
};

export default Testers;
