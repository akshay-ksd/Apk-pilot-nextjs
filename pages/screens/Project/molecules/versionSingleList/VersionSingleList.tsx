import React, { FC } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
interface type {
    data: versionType,
    selectVersion: (data:versionType,index:number)=>void,
    selectedIndex:number,
    index:number
}
const VersionSingleList:FC<type> = ({data,selectVersion,selectedIndex,index}) => {
  return (
    <button className='w-full p-2 flex items-center justify-center' onClick={()=>selectVersion(data,index)}>
        <div className={`w-full p-2 ${selectedIndex == index? "bg-lightGray":"bg-white"}  rounded-md flex items-center justify-between px-10 shadow-sm`}>
            <p className='text-[14px] font-bold font-primary'>{data?.version_number}</p>
            <div className='w-5/6 p-5 bg-white rounded-sm flex items-center'>
                <p className='text-[10px] font-medium text-black font-primary'>{data?.description}</p>
            </div>
            <IoIosArrowForward color={"#000"} size={20} />
        </div>
    </button>
  )
}

export default VersionSingleList