import React from 'react'
import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import ActiveLink from "@/components/active-link/Active-link";


const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' }
]


const Navbar = () => {
  console.log('Nav creado')
  return (
    <nav className='flex bg-blue-800 backdrop-opacity-30 p-2 m-2 rounded'>

      <Link href='/' className='flex items-center justify-center'>
        <HomeIcon size={16} className='mr-2'/>
        <span> Home </span>
      </Link>


      <div className='flex flex-1'>
      </div>


      {navItems.map(navItem => (
        <ActiveLink key={navItem.path} {...navItem}/>
      ))}

    </nav>
  )
}

export default Navbar
