import React, { FC } from 'react'
import { IoIosSearch,IoIosAdd } from "react-icons/io";

const ProjectListHeader:FC<any> = ({newProject}) => {
  return (
    <div className='w-full h-20  flex items-center justify-center'>
        <div className='w-1/4 h-1/2 bg-white rounded-md shadow-md flex items-center px-5'>
          <IoIosSearch color={"#71357B"} size={22} />
          <input placeholder='Search Project' className='text-sm text-primaryText ml-8'/>
        </div>
        <button className='w-1/6 h-1/2 bg-primary flex items-center justify-evenly ml-10 shadow-sm rounded-md' onClick={newProject}>
          <p className='text-sm text-white'>New Project</p>
          <IoIosAdd color={"#fff"} size={22} />
        </button>
    </div>
  )
}

export default ProjectListHeader