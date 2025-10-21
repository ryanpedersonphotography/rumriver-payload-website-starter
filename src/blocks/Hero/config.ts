import type { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  fields: [
    {
      name: 'kicker',
      type: 'text',
      label: 'Script Accent Text',
      defaultValue: 'Where Dreams Begin',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Main Title',
      defaultValue: 'Rum River',
      required: true,
    },
    {
      name: 'titleAccent',
      type: 'text',
      label: 'Title Accent (highlighted portion)',
      defaultValue: 'Wedding Barn',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description Text',
      defaultValue: 'Nestled along Minnesota\'s scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.',
      required: true,
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'CTA Button Text',
      defaultValue: 'Schedule Your Visit',
      required: true,
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'CTA Button Link',
      defaultValue: '/contact',
      required: true,
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      required: true,
    },
    {
      name: 'scrollText',
      type: 'text',
      label: 'Scroll Indicator Text',
      defaultValue: 'Discover Your Perfect Day',
      required: false,
    },
  ],
}