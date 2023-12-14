'use client'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ArrowRight, Bot, Gamepad } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const tools = [
  {
    label: "AI Correspondant",
    icon: Bot,
    color:"text-violet-500",
    bgColor:"bg-violet-500/10",
    href: "/ai_correspondant"
  },
  {
    label:"Word game",
    icon: Gamepad,
    color:"text-orange-500",
    bgColor:"bg-orange-500/10",
    href:"/word_game",
  },
]

type Props = {}

export default function DashboardPage({}: Props) {
  const router = useRouter()
  return (
    <div className='mb-8 space-y-4'>
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Learn a new language using AI
      </h2>
      <p className='text-muted-foreground font-light text-sm md:text-lg text-center'>
        Chat with the smartest AI - Experience the power of AI
      </p>
      <div className='px-4 md:px-20 lg:px-32 space-y-4'>
        {tools.map((tool)=>(
          <Card onClick={()=>router.push(tool.href)}
            key={tool.href}
            className={`p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer`}
          >
            <div className='flex items-center gap-x-4'>
              <span className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn('w-8 h-8', tool.color)}/>
              </span>
              <span className='font-semibold'>
                {tool.label}
              </span>
            </div>
            <ArrowRight className='h-5 w-5'/>
          </Card>
        ))}
      </div>
    </div>
  )
}