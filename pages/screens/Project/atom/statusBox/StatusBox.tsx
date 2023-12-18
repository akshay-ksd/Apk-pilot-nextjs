import React, { FC, useEffect, useState } from 'react'
import { IoIosCheckmark } from 'react-icons/io'
const StatusBox:FC<any> = ({status}) => {
  
  const icons = {
    0:<IoIosCheckmark size={22} color='green'/>
  }
  return (
    <div className='flex items-center w-full justify-center'>
        {icons[status[status.length-1].type]}
        <p className='text-[10px] font-primary font-bold'>{status[status.length-1]?.message}</p>
    </div>
  )
}

export default StatusBox