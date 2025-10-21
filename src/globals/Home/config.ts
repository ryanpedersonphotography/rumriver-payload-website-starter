import type { GlobalConfig } from 'payload'
import { Hero } from '@/blocks/Hero/config'

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
        // TODO: Add more blocks as they are created in future phases
        // AlternatingBlock, GalleryBlock, etc.
      ],
    },
  ],
}