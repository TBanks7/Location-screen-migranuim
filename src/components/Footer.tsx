import React from 'react'

const Footer = () => {
  return (
    <div className='flex font-light text-sm text-gray-500 items-center justify-center pt-14 pb-5'>
      <p>Powered by </p>
      <div className='px-3'>
        <img height={40} width={100} src="https://migranium.com/images/logo-blue.svg" alt="logo" />
      </div>
    </div>
  )
}

export default Footer
