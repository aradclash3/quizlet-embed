import Link from 'next/link';
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between bg-slate-200 py-3.5 px-10'>
      <div className="space-x-5">
        <Link href='/'>Home</Link>
        <Link href='/quizlet'>Quizlet</Link>
      </div>
      
      <div className=""> 
        <Link href="/api/auth/login">Login</Link>
      </div>
    </div>
  )
}

export default NavBar