import Navbar from '@/components/Navbar'
import React from 'react'

const DashboardLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
  return (
    <div className='h-full relative'>
        <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900'>
            <h1 className='text-white text-xl font-bold'>Langu&apos;AI</h1>
        </div>
        <main className='md:pl-72'>
            <Navbar/>
            {children}
        </main>
    </div>
  )
}

export default DashboardLayout