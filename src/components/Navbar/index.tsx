'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface NavbarProps {
  navItems?: Array<{
    label: string
    href: string
  }>
}

export function Navbar({ navItems = [] }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Default navigation items if none provided
  const defaultNavItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Venue', href: '/venue' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Packages', href: '/packages' },
    { label: 'Contact', href: '/contact' }
  ]

  const navigationItems = navItems.length > 0 ? navItems : defaultNavItems

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <nav className={`hotfix-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="hotfix-navbar-container">
          {/* Logo */}
          <Link href="/" className="hotfix-navbar-logo">
            <div className="hotfix-navbar-logo-icon">
              RR
            </div>
            <span className="hotfix-navbar-logo-text">Rum River Barn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hotfix-navbar-nav">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hotfix-navbar-link"
              >
                {item.label}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link href="/schedule-tour" className="hotfix-navbar-cta">
              Schedule Tour
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="hotfix-navbar-mobile-btn"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`hotfix-navbar-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button
          className="hotfix-navbar-mobile-close"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close mobile menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Mobile Navigation Links */}
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hotfix-navbar-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        
        {/* Mobile CTA */}
        <Link
          href="/schedule-tour"
          className="hotfix-navbar-cta"
          onClick={() => setIsMenuOpen(false)}
        >
          Schedule Tour
        </Link>
      </div>

      {/* Overlay backdrop for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-[1000]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}

// Static version for SSR compatibility
export function NavbarStatic({ navItems = [] }: NavbarProps) {
  const defaultNavItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Venue', href: '/venue' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Packages', href: '/packages' },
    { label: 'Contact', href: '/contact' }
  ]

  const navigationItems = navItems.length > 0 ? navItems : defaultNavItems

  return (
    <nav className="hotfix-navbar">
      <div className="hotfix-navbar-container">
        {/* Logo */}
        <Link href="/" className="hotfix-navbar-logo">
          <div className="hotfix-navbar-logo-icon">
            RR
          </div>
          <span className="hotfix-navbar-logo-text">Rum River Barn</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hotfix-navbar-nav">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hotfix-navbar-link"
            >
              {item.label}
            </Link>
          ))}
          
          {/* CTA Button */}
          <Link href="/schedule-tour" className="hotfix-navbar-cta">
            Schedule Tour
          </Link>
        </div>

        {/* Mobile Menu Button - functionality requires JavaScript */}
        <div className="hotfix-navbar-mobile-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </nav>
  )
}