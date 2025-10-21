import type { GlobalConfig } from 'payload'
import { AlternatingBlocks } from '@/blocks/AlternatingBlocks/config'
import { Gallery } from '@/blocks/Gallery/config'
import { Hero } from '@/blocks/Hero/config'
import { SocialProof } from '@/blocks/SocialProof/config'
import { Testimonials } from '@/blocks/Testimonials/config'
import { HistoryCarousel } from '@/blocks/HistoryCarousel/config'
import { ScheduleForm } from '@/blocks/ScheduleForm/config'
import { MapSection } from '@/blocks/MapSection/config'
import { Footer } from '@/blocks/Footer/config'

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
        HistoryCarousel,
        ScheduleForm,
        MapSection,
        Footer,
        // TODO: Add more blocks as they are created in future phases
        // CarouselBlock, FormBlock, MapBlock, etc.
      ],
    },
  ],
}