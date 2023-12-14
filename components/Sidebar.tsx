import Link from 'next/link'
import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <div className='space-y-4 py-4 flex flex-col h-full w-full'>
            <Link href="/dashboard" className='text-center text-3xl font-bold text-white space-x-5'>
                Lingu&apos;AI
            </Link>
    </div>
  )
}

export default Sidebar