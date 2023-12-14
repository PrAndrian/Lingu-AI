import { Button } from '@/components/ui/button'
import { SignInButton, SignUpButton } from '@clerk/nextjs'
import { Link } from 'lucide-react'
import React from 'react'

type Props = {}

export default function LandingPage({}: Props) {
  return (
    <div>
      <div>Landing Page (Unprotected)</div>
      <div>
        <SignInButton>
          <Button>
            Login
          </Button>
        </SignInButton>
        <SignUpButton>
          <Button>
            Register
          </Button>
        </SignUpButton>
      </div>
    </div>
  )
} 