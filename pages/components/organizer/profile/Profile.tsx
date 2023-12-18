import React from 'react';
import Avatar from '../../molecules/avatar/Avatar';
import ProfileDetails from '../../molecules/profileDetails/ProfileDetails';
const Profile = () => {
  return (
    <div className='w-full h-52 flex items-center justify-center flex-col'>
      <Avatar />
      <ProfileDetails/>
    </div>
  );
};

export default Profile;
