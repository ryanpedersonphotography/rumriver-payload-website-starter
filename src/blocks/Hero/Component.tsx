import React from 'react'
import Link from 'next/link'
import type { HeroBlock, Media } from '@/payload-types'

interface HeroProps {
  kicker?: string
  title?: string
  titleAccent?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  backgroundImage?: string | number | Media
  scrollText?: string
}

export const HeroBlockComponent: React.FC<{ block: HeroBlock }> = ({ block }) => {
  const {
    kicker = 'Where Dreams Begin',
    title = 'Rum River',
    titleAccent = 'Wedding Barn',
    description = 'Nestled along Minnesota\'s scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.',
    ctaText = 'Schedule Your Visit',
    ctaLink = '/contact',
    backgroundImage,
    scrollText = 'Discover Your Perfect Day'
  } = block

  // Get background image URL
  const getImageUrl = (image: string | number | Media | undefined): string => {
    if (!image) return '/images/venue/barn-exterior-full-deck-view-evening.jpg'
    if (typeof image === 'string') return image
    if (typeof image === 'number') return '/images/venue/barn-exterior-full-deck-view-evening.jpg'
    return image.url || '/images/venue/barn-exterior-full-deck-view-evening.jpg'
  }

  const bgImageUrl = getImageUrl(backgroundImage)

  return (
    <section 
      className="hotfix-hero-romantic"
      style={{
        backgroundImage: `url("${bgImageUrl}")`,
      }}
    >
      <div className="hotfix-hero-content">
        {/* Script accent kicker */}
        <div className="hotfix-hero-kicker">
          {kicker}
        </div>
        
        {/* Main hero title with accent */}
        <h1 className="hotfix-hero-title">
          {title}<br />
          <span className="hotfix-hero-title-accent">{titleAccent}</span>
        </h1>
        
        {/* Hero description */}
        <p className="hotfix-hero-description">
          {description}
        </p>
        
        {/* Hero action buttons */}
        <div className="hotfix-hero-buttons">
          <Link href={ctaLink} className="hotfix-btn-romantic-secondary">
            {ctaText}
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="hotfix-hero-scroll">
        <div className="hotfix-hero-scroll-text">{scrollText}</div>
        <div className="hotfix-hero-scroll-arrow">↓</div>
      </div>
    </section>
  )
}

// Presentational Hero component for direct use
export const Hero: React.FC<HeroProps> = (props) => {
  return (
    <HeroBlockComponent 
      block={{
        blockType: 'hero',
        blockName: 'Hero Section',
        ...props
      } as HeroBlock} 
    />
  )
}