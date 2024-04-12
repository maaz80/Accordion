import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex bg-gray-600 h-14'>
        <li className='list-none m-3 hover:bg-red-600 hover:p-1 hover:rounded-md hover:font-semibold'>Home</li>
        <li className='list-none m-3 hover:bg-red-600 hover:p-1  hover:rounded-md hover:font-semibold'>About</li>
        <li className='list-none m-3 hover:bg-red-600 hover:p-1  hover:rounded-md hover:font-semibold'>Contact</li>
        <li className='list-none m-3 hover:bg-red-600 hover:p-1  hover:rounded-md hover:font-semibold'>Help</li>
      </nav>
    </div>
  )
}

export default Navbar
