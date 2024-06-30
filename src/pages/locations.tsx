import React from 'react'
import { useState } from 'react';
import '../App.css';
import { TbArrowUp, TbSearch, TbTrash } from 'react-icons/tb';
import LocationList from '../components/LocationList';
import { PiBuildings } from "react-icons/pi";
import { BsBox2 } from "react-icons/bs";
import IconButton from '../components/IconButton';
import Entity from '../components/Entity';


const Locations = () => {
    const [isChecked, setIsChecked] = useState(true)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }

    const [isSelectAllChecked, setIsSelectAllChecked] = useState(false);

    const handleSelectAllChange = () => {
        setIsSelectAllChecked(!isSelectAllChecked);
    };

    return (
        <div className='p-3 w-full'>
      <div className='flex justify-between items-center pb-10'>
        <div>
          <p className='text-gray-400'>North York Medical Clinic</p>
          <h2 className='font-bold text-gray-950 text-3xl'>Locations</h2>
        </div>
        
        <div className='flex gap-2'>
          <Entity number= {3} entityType= 'Location' Icon={PiBuildings} />
          <Entity number= {36} entityType= 'Stations' Icon={BsBox2}/>
        </div>
        
        <div>
          <button className='flex items-center rounded-lg py-1 px-3 border-2 border-gray-200'>
            <TbArrowUp />
            <label className="font-semibold whitespace-nowrap cursor-pointer">Upgrade Plan</label>
          </button>
        </div>
      </div>

      <div className="w-full mx-auto">
        <div className="flex justify-between items-center mb-5 relative">
          <TbSearch className="absolute left-2 top-2 text-gray-400" size={20} />
          <input type="text" placeholder="Search" className="border px-2 pl-10 py-1 rounded-md flex-1 mr-4 w-4/6" />
          <select className="border px-2 py-1 rounded-md mr-4 w-1/6">
            <option className='text-gray-500'>Sort By</option>
          </select>
          <button className="bg-migranium-blue text-white px-2 py-1 rounded-md w-1/6">Add Location</button>
        </div>
        <div className='flex justify-between pb-5'>
          <label htmlFor="">
            <input type="checkbox" checked={isSelectAllChecked} onChange={handleSelectAllChange} name="" id="" />
            <span className= "pl-1 text-gray-500">Select All</span>
          </label>
          <div className='flex items-center'>
              <p className='text-sm'>Activate Selected</p>
              <label className='autoSaverSwitch relative inline-flex cursor-pointer select-none items-center px-2'>
                  <input
                  type='checkbox'
                  name='autoSaver'
                  className='sr-only'
                  checked
                  onChange={handleCheckboxChange}
                  />
                  <span
                  className={`slider mr-3 flex h-[20px] w-[35px] items-center rounded-full p-1 duration-200 ${
                      isChecked ? 'bg-gray-100' : 'bg-[#CCCCCE]'
                  }`}
                  >
                  <span
                      className={`dot h-[14px] w-[14px] rounded-full bg-white duration-200 ${
                      isChecked ? 'translate-x-4' : ''
                      }`}
                  ></span>
                  </span>
                  <span className='label flex items-center text-sm font-medium text-black'>
                      {isChecked ? 'Yes' : 'No'}
                  </span>
              </label>
              <div className='flex px-2'>
                  <IconButton Icon={TbTrash} />
              </div>
              
          </div>
          

        </div>
        <LocationList selected={isSelectAllChecked} />
      </div>
    </div>
    )
}

export default Locations
