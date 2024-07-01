import React, { Children } from 'react'
import { IconType } from 'react-icons';

type IconButtonProps = {
    Icon: IconType;
}

const IconButton = ({Icon}: IconButtonProps) => {
  return (
    <button className='bg-gray-200 rounded-md p-2'>
      <Icon />
    </button>
  )
}

export default IconButton
