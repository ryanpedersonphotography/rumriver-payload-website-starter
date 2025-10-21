import React from 'react'
import { Metadata } from 'next'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { Hero } from '@/blocks/Hero/Component'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { generateMeta } from '@/utilities/generateMeta'

import type { Home as HomeType } from '@/payload-types'

export default async function HomePage() {
  try {
    const home: HomeType = await getCachedGlobal('home', 1)()
    
    // If we have home data with blocks, render them
    if (home?.blocks && home.blocks.length > 0) {
      return (
        <div className="pt-0">
          <RenderBlocks blocks={home.blocks} />
        </div>
      )
    }
  } catch (error) {
    console.log('Home Global not found, rendering default hero')
  }
  
  // Fallback: render default hero for testing
  return (
    <div className="pt-0">
      <Hero 
        kicker="Where Dreams Begin"
        title="Rum River"
        titleAccent="Wedding Barn"
        description="Nestled along Minnesota's scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration."
        ctaText="Schedule Your Visit"
        ctaLink="/contact"
        backgroundImage="/images/venue/barn-exterior-full-deck-view-evening.jpg"
        scrollText="Discover Your Perfect Day"
      />
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return generateMeta({
    doc: {
      meta: {
        title: 'Rum River Wedding Barn - Where Dreams Begin',
        description: 'Nestled along Minnesota\'s scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.',
      }
    }
  })
}
