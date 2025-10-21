'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Navbar } from '@/components/Navbar'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  // Convert Payload navItems to our navbar format
  const navItems = data?.navItems?.map((item) => {
    const link = item?.link
    if (!link) return { label: '', href: '/' }
    
    if (link.type === 'custom' && link.url) {
      return { label: link.label || '', href: link.url }
    }
    
    if (link.type === 'reference' && link.reference?.value && typeof link.reference.value === 'object' && 'slug' in link.reference.value) {
      return { label: link.label || '', href: `/${link.reference.value.slug}` }
    }
    
    return { label: link.label || '', href: '/' }
  }) || []

  return (
    <Navbar navItems={navItems} />
  )
}
