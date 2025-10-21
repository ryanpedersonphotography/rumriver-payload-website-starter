import type { Block } from 'payload'

export const Gallery: Block = {
  slug: 'gallery',
  interfaceName: 'GalleryBlock',
  fields: [
    {
      name: 'sectionHeader',
      type: 'group',
      label: 'Section Header',
      fields: [
        {
          name: 'scriptAccent',
          type: 'text',
          label: 'Script Accent Text',
          defaultValue: 'Real Love Stories',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
          defaultValue: 'Weddings at the Barn',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Section Description',
          defaultValue: 'Every celebration tells a unique story of love, laughter, and happily ever after.',
          required: true,
        },
      ],
    },
    {
      name: 'galleries',
      type: 'array',
      label: 'Wedding Galleries',
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          name: 'coupleNames',
          type: 'text',
          label: 'Couple Names',
          required: true,
        },
        {
          name: 'season',
          type: 'text',
          label: 'Season & Year',
          defaultValue: 'Summer 2024',
          required: true,
        },
        {
          name: 'photoCount',
          type: 'text',
          label: 'Photo Count',
          defaultValue: '50 Photos',
          required: true,
        },
        {
          name: 'venue',
          type: 'text',
          label: 'Venue',
          defaultValue: 'Rum River Barn',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Featured Image',
          required: true,
        },
        {
          name: 'galleryLink',
          type: 'text',
          label: 'Gallery Link',
          defaultValue: '/real-weddings/couple-name',
          required: true,
        },
        {
          name: 'gridSpan',
          type: 'select',
          label: 'Grid Span',
          defaultValue: 'normal',
          options: [
            {
              label: 'Normal (1x1)',
              value: 'normal',
            },
            {
              label: 'Wide (2x1)',
              value: 'wide',
            },
            {
              label: 'Featured (2x2)',
              value: 'featured',
            },
          ],
          required: true,
        },
      ],
    },
  ],
}