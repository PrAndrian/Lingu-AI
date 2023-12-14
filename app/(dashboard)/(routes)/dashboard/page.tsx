import { UserButton } from '@clerk/nextjs'
import React from 'react'

type Props = {}

export default function DashboardPage({}: Props) {
  return (
    <div>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}