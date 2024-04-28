import React from 'react'

const Header = () => {
  return (
    <>
        <div className='h-10 w-full flex justify-between bg-cyan-400 text-white py-2 items-center px-4'>
            <div className=''>
                <span>Home</span>
            </div>
            <div className='flex gap-5 px-4'>
                <div>Login</div>
                <div>UserName</div>
            </div>
        </div>
    </>
  )
}
export default Header