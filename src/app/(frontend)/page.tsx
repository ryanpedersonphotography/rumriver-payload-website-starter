import React from 'react'
import { Metadata } from 'next'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { Hero } from '@/blocks/Hero/Component'
import { AlternatingBlocks } from '@/blocks/AlternatingBlocks/Component'
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
  
  // Fallback: render default components for testing
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
      <AlternatingBlocks 
        sectionHeader={{
          scriptAccent: "Your Perfect Venue",
          title: "Why Choose Rum River Barn",
          description: "Discover what makes our venue the perfect setting for your unforgettable celebration"
        }}
        blocks={[
          {
            number: "01",
            title: "A Picturesque Location For Your Special Event",
            lead: "Near Milaca, Saint Paul, St Cloud, and Brainerd MN",
            content: [
              { children: [{ text: 'When it comes to special occasions such as weddings, birthday parties, or other events, it is important to have the perfect setting. You want to ensure that your event is at a location that people will remember.' }] },
              { children: [{ text: 'Here at Rum River Barn, we understand the importance of your special occasion. We are different from other special event venues because we allow you to pretty much run the show. When you choose us, you do not have to worry about us saying no.' }] },
              { children: [{ text: 'Our goal is to help you have your perfect day. We tend to book up fast, so don\'t wait—call us today at 612-801-0546!' }] }
            ],
            image: "/images/venue/barn-interior-ceiling-beams-lighting.jpg",
            layout: "normal"
          },
          {
            number: "02",
            title: "Rum River Barn & Vineyard",
            lead: "Milaca, St. Cloud, Saint Paul, and Brainerd MN",
            content: [
              { children: [{ text: 'Nestled within 400 acres of pure country and rustic charm, this is the perfect barn wedding venue in Minnesota. On a peaceful hillside overlooking grape vineyards, mile-long manicured old oak forests, and white pines next to a whispering brook, we offer Minnesota\'s premier barn wedding venue and country special events venue for your custom special event.' }] },
              { children: [{ text: 'Enjoy the serenity, peacefulness, and amazing beauty which has been carved out of the forests and developed for the past 100 years.' }] }
            ],
            image: "/images/venue/property-field-wildflowers-natural.jpg",
            layout: "reverse"
          }
        ]}
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
