import { Menu } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='flex items-center p-4'>
        <Button variant="ghost" size="icon" className='md:hidden'>
            <Menu/>
        </Button>
    </header>
  )
}

export default Navbar