import { Menu } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { UserButton } from '@clerk/nextjs'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='flex items-center p-4'>
        <Button variant="ghost" size="icon" className='md:hidden'>
            <Menu/>
        </Button>
        <div className='flex w-full justify-end'>
            <UserButton afterSignOutUrl='/'/>
        </div>
    </header>
  )
}

export default Navbar