import type { GlobalConfig } from 'payload'
import { AlternatingBlocks } from '@/blocks/AlternatingBlocks/config'
import { Gallery } from '@/blocks/Gallery/config'
import { Hero } from '@/blocks/Hero/config'
import { SocialProof } from '@/blocks/SocialProof/config'
import { Testimonials } from '@/blocks/Testimonials/config'

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
        Testimonials,
        // TODO: Add more blocks as they are created in future phases
        // CarouselBlock, FormBlock, MapBlock, etc.
      ],
    },
  ],
}