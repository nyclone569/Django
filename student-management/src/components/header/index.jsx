import React, { useState } from 'react'
import { FaChevronDown, FaInfoCircle, FaUser } from 'react-icons/fa'
import { IoLogOutOutline, IoNotificationsOutline, IoNotificationsSharp } from 'react-icons/io5'
import { MdVpnKey } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Header() {
    const [isHover, setIsHover] = useState(false)
  return (
    <ul className="h-[70px] max-w-[1200px] mx-auto flex justify-between items-center px-[20px]" style={{backgroundColor: "#babdc2"}}>
        <li className='list-none'>
            <Link className="no-underline text-[45px] text-inherit" to={"#"}>Logo</Link>
        </li>
        <li className="flex items-center gap-[20px] text-white cursor-pointer h-full">
            <div className="flex items-center mr-10 h-full" onMouseOver={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }}>
                {isHover ? <IoNotificationsSharp className="text-2xl mr-2" /> : <IoNotificationsOutline className="text-2xl mr-2" />}
                <span className='text-[21px]'>Notification</span>
            </div>
            <div className="group flex items-center relative cursor-pointer h-full">
                <FaUser className="text-2xl mr-[5px]" />
                <span className='text-[21px] mr-[5px]'>Manager</span>
                <FaChevronDown className="ml-1" />
                <ul className="group-hover:block hidden absolute text-black top-full right-0 w-[250px] py-[10px] bg-white shadow-[0_9px_28px_8px_rgba(0,0,0,0.05)] rounded-md">
                    <li className="flex items-center pl-4 py-3 hover:bg-gray-100 cursor-pointer rounded-md">
                        <FaInfoCircle className="text-lg mr-2" />
                        Personal information
                    </li>
                    <li className="flex items-center py-[15px] pl-4 py-3 hover:bg-gray-100 cursor-pointer rounded-md">
                        <MdVpnKey className="text-lg mr-2" />
                        Change password
                    </li>
                    <li className="flex items-center pl-4 py-3 hover:bg-gray-100 cursor-pointer rounded-md">
                        <IoLogOutOutline className="text-lg mr-2" />
                        Logout
                    </li>
                </ul>
            </div>
        </li>
    </ul>                    
  )
}
