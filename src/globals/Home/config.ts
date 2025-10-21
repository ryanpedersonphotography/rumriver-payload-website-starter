import type { GlobalConfig } from 'payload'
import { AlternatingBlocks } from '@/blocks/AlternatingBlocks/config'
import { Gallery } from '@/blocks/Gallery/config'
import { Hero } from '@/blocks/Hero/config'
import { SocialProof } from '@/blocks/SocialProof/config'

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Home Page',
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [
        Hero,
        AlternatingBlocks,
        Gallery,
        SocialProof,
        // TODO: Add more blocks as they are created in future phases
        // TestimonialsBlock, CarouselBlock, etc.
      ],
    },
  ],
}