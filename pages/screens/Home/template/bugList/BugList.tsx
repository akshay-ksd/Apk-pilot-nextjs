import React from 'react'
import BugListHeader from "../../molecules/bugListHeader/BugListHeader"
import BugTable from '../../organizer/bugTable/BugTable'
const BugList = () => {
  return (
    <div className='w-full h-full bg-white ml-0.5'>
        <BugListHeader/>
        <BugTable/>
    </div>
  )
}

export default BugList