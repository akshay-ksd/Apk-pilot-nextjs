import React from 'react'
import Header from './molecules/header/Header'
import UsersList from './template/usersList/UsersList'
const Users = () => {
  return (
    <div className='w-full h-full bg-white ml-0.5 flex-col justify-center'>
      <UsersList/>
    </div>
  )
}

export default Users