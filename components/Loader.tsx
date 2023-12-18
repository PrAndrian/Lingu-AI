import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='w-5 h-5 animate-spin'>
        <Image
            alt="Loader"
            fill
            src="/logo.png"
        />
    </div>
  )
}

export default Loader