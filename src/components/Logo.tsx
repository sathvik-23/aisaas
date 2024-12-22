import Link from 'next/link' // Use Next.js Link for navigation
import React from 'react'
import { Sparkles } from 'lucide-react'

export const Logo = () => {
  return (
    <Link href="/">
      <Sparkles className="size-8" strokeWidth={1.5} />
      <span className="text-lg font-bold">Pictoria AI</span>
    </Link>
  )
}
