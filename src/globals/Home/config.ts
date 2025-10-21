import type { GlobalConfig } from 'payload'

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
        // TODO: Add blocks as they are created in future phases
        // HeroBlock, AlternatingBlock, GalleryBlock, etc.
      ],
    },
  ],
}