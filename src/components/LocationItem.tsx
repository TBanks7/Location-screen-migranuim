import React, { useState, useEffect } from 'react'

import { FaStar, FaStarHalf } from 'react-icons/fa';
import { TbChevronRight, TbInfoCircle, TbMapPin, TbSettings, TbTrash } from 'react-icons/tb';
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { BiStopwatch } from "react-icons/bi";
import IconButton from './IconButton';

type LocationItemProps = {
  id: number
  key: number
  name: string;
  address: string;
  stations: number;
  avgWaitTime: string;
  active: boolean;
  image: string;
  rating: number;
  selected: boolean;
  handleItemSelectChange: (id: number) => void;
}

const LocationItem = ({ id, name, address, stations, avgWaitTime, active, image, rating, selected, handleItemSelectChange }: LocationItemProps) => {
  const [isActive, setIsActive] = useState(active);

  const handleActiveChange = () => {
      setIsActive(!isActive);
  };

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
          if (i < Math.floor(rating)) {
            stars.push(<FaStar key={i} className="text-yellow-500" />);
          } else if (i < Math.ceil(rating)) {
            stars.push(<FaStarHalf key={i} className="text-yellow-500" />);
          } else {
            stars.push(<FaStar key={i} className="text-gray-300" />);
          }
        }
        return stars;
      };
  return (
    <div className="bg-[#f8f9fb] border-y-2 flex justify-between items-center p-4 rounded-lg">
        <div className='flex items-center w-1/3'>
            <div className='border-1 border-gray-200 pr-3' >
            <input type="checkbox" checked={selected} onChange={() => handleItemSelectChange(id)} />
            </div>
            <img src={image} alt={name} className="w-16 h-16 rounded-md object-cover" />
            <div className="ml-4">
                <h2 className="flex text-lg font-semibold">{name} <span className='pl-3'><IconButton Icon={TbInfoCircle}/></span> </h2>
                <p className="flex items-center text-sm text-gray-500"><span className='pr-2'><TbMapPin /></span>{address}</p>
                <div className="flex mt-2">
                {renderStars()}
                </div>
            </div>
        </div>
        
        <div className='flex gap-5'>
            <div className='flex items-center gap-2 bg-gray-200 rounded-md px-2 text-sm text-gray-500'><span className='text-black'><HiOutlineBuildingStorefront /></span> Stations <span className='font-bold text-black'>{stations}</span></div>
            <div className='flex items-center gap-2 bg-gray-200 rounded-md px-2 text-sm text-gray-500'><span className='text-black'><BiStopwatch /></span>Avg. Wait Time <span className='font-bold text-black'>{avgWaitTime}</span></div>
            <div className='border-l-2 border-gray-200'></div>
        </div>
        <div className='flex items-center'>
            <p className='text-sm'>Location Active</p>
            <label className='autoSaverSwitch relative inline-flex cursor-pointer select-none items-center px-2'>
                <input
                type='checkbox'
                name='autoSaver'
                className='sr-only'
                checked={isActive}
                onChange={handleActiveChange}
                />
                <span
                className={`slider mr-3 flex h-[18px] w-[32px] items-center rounded-full p-1 duration-200 ${
                    isActive ? 'bg-green-500' : 'bg-[#CCCCCE]'
                }`}
                >
                <span
                    className={`dot h-[13px] w-[13px] rounded-full bg-white duration-200 ${
                    isActive ? 'translate-x-3' : ''
                    }`}
                ></span>
                </span>
                <span className='label flex items-center text-sm font-medium text-black'>
                    {isActive ? 'Yes' : 'No'}
                </span>
            </label>
            <div className='flex gap-3 px-2 items-center'>
                <IconButton Icon={TbSettings} />
                <IconButton Icon={AiOutlineAppstoreAdd}/>
                <IconButton Icon={TbTrash} />
                <TbChevronRight />
            </div>
            
        </div>
    </div>
  )
}

export default LocationItem
