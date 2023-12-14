import { Menu } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from './MobileSidebar'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='flex items-center p-4'>
        <MobileSidebar/>
        <div className='flex w-full justify-end'>
            <UserButton afterSignOutUrl='/'/>
        </div>
    </header>
  )
}

export default Navbar