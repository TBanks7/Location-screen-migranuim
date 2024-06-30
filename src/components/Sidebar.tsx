import React from 'react'
import { NavLink } from 'react-router-dom';
import { FiAirplay, FiUsers } from "react-icons/fi";
import { IoPodiumOutline } from "react-icons/io5";
import { LuCalendarClock, LuLayoutList } from "react-icons/lu";
import { PiMapPinArea } from "react-icons/pi";
import { RiApps2AddLine } from "react-icons/ri";
import { HiOutlinePaintBrush, HiOutlineBookOpen } from "react-icons/hi2";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
  return (
    <nav className='h-full w-16 fixed top-0 left-0 flex flex-col justify-between bg-migranium-blue'>
        <div className='py-6'>
            <div className='rounded-full font-bold text-center text-white p-2 m-3 bg-blue-900'>
                DR
            </div>

            <div>
                <NavLink
                    to="/blank"
                    className={({ isActive }) => isActive ? 'bg-slate-300 py-3 flex justify-center text-white' : 'py-3 flex justify-center text-white hover:bg-slate-300'}
                >
                    <LuLayoutList className='text-white' size={20} />
                </NavLink>
                <NavLink
                    to="/blank1"
                    className={({ isActive }) => isActive ? 'bg-slate-300 py-3 flex justify-center text-white' : 'py-3 flex justify-center text-white hover:bg-slate-300'}
                >
                    <FiAirplay className='text-white' size={20} />
                </NavLink>
                <NavLink
                    to="/blank2"
                    className={({ isActive }) => isActive ? 'bg-slate-300 py-3 flex justify-center text-white' : 'py-3 flex justify-center text-white hover:bg-slate-300'}
                >
                    <IoPodiumOutline className='text-white' size={20} />
                </NavLink>
                <NavLink
                    to="/blank3"
                    className={({ isActive }) => isActive ? 'bg-slate-300 py-3 flex justify-center text-white' : 'py-3 flex justify-center text-white hover:bg-slate-300'}
                >
                    <LuCalendarClock className='text-white' size={20} />
                </NavLink>
                
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? 'bg-slate-300 py-3 flex justify-center text-white' : 'py-3 flex justify-center text-white hover:bg-slate-300'}
                >
                    <PiMapPinArea className='text-white' size={20} />
                </NavLink>
                <NavLink
                    to="/blank4"
                    className={({ isActive }) => isActive ? 'bg-slate-300 py-3 flex justify-center text-white' : 'py-3 flex justify-center text-white hover:bg-slate-300'}
                >
                    <FiUsers className='text-white' size={20} />
                </NavLink>
                <NavLink
                    to="/blank5"
                    className={({ isActive }) => isActive ? 'bg-slate-300 py-3 flex justify-center text-white' : 'py-3 flex justify-center text-white hover:bg-slate-300'}
                >
                    <RiApps2AddLine className='text-white' size={20} />
                </NavLink>
                <NavLink
                    to="/blank6"
                    className={({ isActive }) => isActive ? 'bg-slate-300 py-3 flex justify-center text-white' : 'py-3 flex justify-center text-white hover:bg-slate-300'}
                >
                    <HiOutlinePaintBrush className='text-white' size={20} />
                </NavLink>

                <NavLink
                    to="/blank7"
                    className={({ isActive }) => isActive ? 'bg-slate-300 py-3 flex justify-center text-white' : 'py-3 flex justify-center text-white hover:bg-slate-300'}
                >
                    <HiOutlineBookOpen className='text-white' size={20} />
                </NavLink>
            </div>
        </div>
        
        <div className='py-12'>
            <NavLink
                to="/logout"
                className={({ isActive }) => isActive ? 'bg-slate-300 py-3 flex justify-center text-white' : 'py-3 flex justify-center text-white hover:bg-slate-300'}
            >
                <CiLogout className='text-white' size={20} />
            </NavLink>
        </div>
      </nav>
  )
}

export default Sidebar
