// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Link, Outlet} from "react-router-dom"
import { useAuth } from '../../context/authContext'
function RoutLayout() {
    const {session} = useAuth()
  return (
    <>
    <div className='bg-zinc-100 mb-8'>
        <nav className="flex justify-between items-center place-items-center h-14 container mx-auto">
            <h1 className='text-sky-700 text-3xl '>Ecom</h1>
            <ul className='flex items-center space-x-8 font-bold text-zinc-800 hover:text-zinc-500'>
                <li className='text-zinc-800 hover:text-zinc-500 '>
                    <Link to="/">Products</Link>
                </li>
                <li className='text-zinc-800 hover:text-zinc-500'>
                    <Link to="/cart">Cart</Link>
                </li>
                {session && (
                   <li className='text-zinc-800 hover:text-zinc-500'>
                   <Link to="/profile">Profile</Link>
               </li>
                )}
                {!session && (
                    <li className='text-zinc-800 hover:text-zinc-500'>
                    <Link to="/login">Login</Link>
                </li>
                )}
            </ul>
        </nav>
        </div>
        <main>  
            <Outlet/> 
        </main>
    </>
  )
}

export default RoutLayout