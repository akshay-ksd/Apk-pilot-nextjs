import React from 'react'

const ListHeader = () => {
  return (
    <div className='w-full items-center justify-center p-2'>
        <div className='w-full flex items-center justify-between px-2 bg-white rounded-md shadow-sm'>
            <div className='w-1/12 py-2 flex items-center justify-center'>
                <p className='text-[12px] text-grayText font-medium font-primary'>Build</p>
            </div>
            <div className='w-1/6 py-2 flex items-center justify-center '>
                <p className='text-[12px] text-grayText font-medium font-primary'>Status</p>
            </div>
            <div className='w-1/6 py-2 flex items-center justify-center'>
                <p className='text-[12px] text-grayText font-medium font-primary'>Testers</p>
            </div>
            <div className='w-1/12 py-2 flex items-center justify-center'>
                <p className='text-[12px] text-grayText font-medium font-primary'>Bugs</p>
            </div>
            <div className='w-1/12 py-2 flex items-center justify-center'>
                <p className='text-[12px] text-grayText font-medium font-primary'>PlayStore</p>
            </div>
            <div className='w-1/3 py-2 flex items-center justify-center '>
                <p className='text-[12px] text-grayText font-medium font-primary'>Comments</p>
            </div>
        </div>
    </div>
  )
}

export default ListHeader