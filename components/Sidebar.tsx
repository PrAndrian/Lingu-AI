'use client'

import { cn } from '@/lib/utils'
import { Bot, Gamepad, LayoutDashboard, Settings } from 'lucide-react'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const monserrat = Montserrat({
    weight:'600',
    subsets:['latin'],
})

const routes = [
    {
        label:"Dashboard",
        icon: LayoutDashboard,
        href:"/dashboard",
        color:"text-sky-500"
    },
    {
        label:"Ai correspondant",
        icon: Bot,
        href:"/ai_correspondant",
        color:"text-violet-500"
    },
    {
        label:"Word game",
        icon: Gamepad,
        href:"/word_game",
        color:"text-orange-500"
    },
    {
        label:"Settings",
        icon: Settings,
        href:"/setting",
        color:"text-gray-500"
    },
]

type Props = {}

const Sidebar = (props: Props) => {
    const pathname = usePathname()
    console.log(pathname)
    return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
        <div className='px-3 py-4 flex-1'>
            <div className='text-center text-white mb-14'>
                <Link href="/dashboard" className=''>
                    <h1 className={cn("text-2xl font-bold",monserrat.className)}>Lingu&apos;AI</h1>  
                </Link>
            </div>

            <div className='space-y-1'>
                {routes.map((route)=>(
                    <Link 
                        key={route.href} 
                        href={route.href}
                        className={
                        cn(`
                            flex 
                            group
                            text-sm
                            p-3
                            w-full
                            justify-start
                            font-medium
                            cursor-pointer
                            hover:text-white
                            hover:bg-white/10
                            rounded-lg
                            transition
                        `, 
                            pathname === route.href ? 
                            'text-white bg-white/10'
                            : 'test-zinc-400'
                        )}
                    >
                        <div className="flex items-center flex-1">
                            <route.icon className={cn("h-5 w-5 mr-3",route.color)}/>
                            {route.label}    
                        </div>
                    </Link>
                ))}
            </div>
        </div>

            
    </div>
    )
}

export default Sidebar