import React from 'react'
import { Metadata } from 'next'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { generateMeta } from '@/utilities/generateMeta'

import type { Home as HomeType } from '@/payload-types'

export default async function HomePage() {
  const home: HomeType = await getCachedGlobal('home', 1)()

  return (
    <div className="pt-0"> {/* Remove default padding since hero is full viewport */}
      <RenderBlocks blocks={home.blocks} />
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
