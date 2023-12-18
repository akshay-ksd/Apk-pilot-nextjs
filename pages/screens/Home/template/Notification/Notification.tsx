import React from 'react'
import NotificationHeader from '../../molecules/notiicationHeader/NotificationHeader'
import NotificationList from '../../organizer/notificationList/NotificationList'
const Notification = () => {
  return (
    <div className='h-full w-1/4 bg-secondaryBackground'>
        <NotificationHeader/>
        <NotificationList/>
    </div>
  )
}

export default Notification