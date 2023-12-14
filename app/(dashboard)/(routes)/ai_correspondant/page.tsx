import Heading from '@/components/Heading'
import { MessageSquare } from 'lucide-react'
import React from 'react'

type Props = {}

const AiCorrespondant = (props: Props) => {
  return (
    <div>
        <Heading
          title='Ai correspondant'
          description='Our most advenced conversation'
          icon={MessageSquare}
          iconColor='text-violet-500'
          bgColor='bg-violet-500/10'
        />
    </div>
  )
}

export default AiCorrespondant