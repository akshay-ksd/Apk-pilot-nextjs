import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import UserSingleRender from "../../molecules/userSingleRender/UserSingleRender";
import Header from "../../molecules/header/Header";
import RegistrationForm from "../../../../components/organizer/registrationForm/RegistrationForm";
import { ToastContainer, toast } from "react-toastify";
import useGetAllUsers from "../../hook/useGetAllUsers";
import EditForm from "../../../../components/organizer/registrationForm/EditForm";
const UsersList = () => {
  const [regModel, setRegModel] = useState(false);
  const [getAllUsers, loading] = useGetAllUsers();
  const [users, setUsers] = useState<schema[]>([]);
  const [editForm, setEditForm] = useState(false);

  //ref
  const editFormRef = useRef();

  //   {
  //     userId: "jfje73h",
  //     userName: "Pramod",
  //     userThumbnail:
  //       "https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png",
  //     userTypeId: 1,
  //     userType: "Tester",
  //     isActive: true,
  //     email: "pramod@gmail.com",
  //   },
  //   {
  //     userId: "jfje73h",
  //     userName: "Abhinand",
  //     userThumbnail:
  //       "https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png",
  //     userTypeId: 2,
  //     userType: "Developer",
  //     isActive: true,
  //     email: "pramod@gmail.com",
  //   },
  //   {
  //     userId: "jfje73h",
  //     userName: "Sibin",
  //     userThumbnail:
  //       "https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png",
  //     userTypeId: 3,
  //     userType: "Lead",
  //     isActive: true,
  //     email: "pramod@gmail.com",
  //   },
  //   {
  //     userId: "jfje73h",
  //     userName: "Pramod",
  //     userThumbnail:
  //       "https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png",
  //     userTypeId: 1,
  //     userType: "Tester",
  //     isActive: true,
  //     email: "pramod@gmail.com",
  //   },
  //   {
  //     userId: "jfje73h",
  //     userName: "Jyothish",
  //     userThumbnail:
  //       "https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png",
  //     userTypeId: 4,
  //     userType: "Manager",
  //     isActive: true,
  //     email: "pramod@gmail.com",
  //   },
  //   {
  //     userId: "jfje73h",
  //     userName: "Sneha",
  //     userThumbnail:
  //       "https://blog.hootsuite.com/wp-content/uploads/2020/02/Image-copyright-556x556.png",
  //     userTypeId: 1,
  //     userType: "Tester",
  //     isActive: true,
  //     email: "pramod@gmail.com",
  //   },
  // ];

  useLayoutEffect(() => {
    getAllUsersData();
  }, []);

  const getAllUsersData = async () => {
    const data = await getAllUsers();
    setUsers(data);
  };

  const closeModel = (user) => {
    setRegModel(false);
    if (user) {
      let newData = users;
      newData.unshift(user?.data);
      setUsers(newData);
    }
  };

  const editDetails = (data) => {
    setEditForm(true);
    setTimeout(() => {
      editFormRef.current.loadDetails(data);
    }, 500);
  };

  const closeEditModel = (data) => {
    if (data) {
      let newData = users;

      const index = newData.findIndex((x) => x?._id === data?.data?._id);
      newData[index] = data?.data;
      setUsers(newData);
    }
    setEditForm(false)
  };
  return (
    <div className="w-full h-5/6">
      <Header openRegisterModel={() => setRegModel(true)} />
      {/* <ToastContainer /> */}
      <div className="w-full p-10 px-48 mt-5">
        <p className="text-lg font-bold text-primary ml-24">Users</p>
      </div>
      <div className="overflow-scroll h-5/6 mt-8">
        {users.map((x: schema) => (
          <UserSingleRender x={x} key={x?._id} editDetails={editDetails} />
        ))}
        {regModel && <RegistrationForm closeModel={closeModel} />}

        {editForm && <EditForm closeModel={closeEditModel} ref={editFormRef} />}
      </div>
    </div>
  );
};

export default UsersList;
