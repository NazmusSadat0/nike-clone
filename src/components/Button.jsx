import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='bg-red-500 flex text-white font-bold p-2 mt-10 rounded-2xl'>{label}
    <img src={iconURL} alt="arrow" className='ml-2 rounded-full w-5 h-5 mt-0.5' /></button>
  )
}

export default Button