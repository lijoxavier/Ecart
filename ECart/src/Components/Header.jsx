import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '../assets/Images/cart.jpg'
const Header = () => {
  return (
    <header className='fixed z-20 top-0 w-full bg-green-800 text-white flex items-center py-4 px-8  '>
      <div className="logo flex items-center">
        <img src={logo} alt="" className='w-10 sm:ml-10' />
        <a className='ml-2 text-xl font-bold cursor-pointer'>E Cart</a>
      </div>
      <div className="search hidden sm:block mx-10">
        <input type="text" className='py-2 px-4 bg-green-700 text-white rounded-lg outline-none border-none sm:focus:pr-72 ease duration-200' placeholder='search..' />
      </div>
      <nav className='flex flex-auto justify-end gap-x-9'>

        <FaSearch  style={{width:"20px",height:"20px"}}/>
        <FaShoppingCart  className='w-5 h-5'/>
        <FaUser className='w-5 h-5' />

      </nav>
    </header>

  )
}

export default Header