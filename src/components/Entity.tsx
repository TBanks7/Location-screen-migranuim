import React from 'react'
import { IconType } from 'react-icons'
import { TbCalendarTime } from 'react-icons/tb'

type EntityProps = {
    number: number,
    entityType: string,
    Icon: IconType
}

const Entity = ({number, entityType, Icon}: EntityProps) => {
  return (
    <div className="flex items-center p-1 bg-white rounded-full border-2">
        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full py-0">
            <Icon className='text-migranium-blue' />
        </div>
        <div className="ml-2 mr-4">
            <p className="text-sm font-medium text-migranium-blue">{number}</p>
            <p className="text-xs text-migranium-blue">{entityType}</p>
        </div>
    </div>
  )
}

export default Entity
