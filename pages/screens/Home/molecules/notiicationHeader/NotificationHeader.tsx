import React from 'react'
import { IoIosNotifications } from "react-icons/io";

const NotificationHeader = () => {
  return (
    <div className='w-full h-20  flex items-center justify-center'>
        <IoIosNotifications color={"#FE7E51"} size={22} />
        <p className='text-primaryText text-md ml-3'>Notifications</p>
    </div>
  )
}

export default NotificationHeader