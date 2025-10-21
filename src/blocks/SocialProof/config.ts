import type { Block } from 'payload'

export const SocialProof: Block = {
  slug: 'socialProof',
  interfaceName: 'SocialProofBlock',
  fields: [
    {
      name: 'brandLogos',
      type: 'array',
      label: 'Brand Logos',
      minRows: 2,
      maxRows: 8,
      fields: [
        {
          name: 'brandName',
          type: 'text',
          label: 'Brand Name',
          required: true,
        },
        {
          name: 'displayOrder',
          type: 'number',
          label: 'Display Order',
          defaultValue: 1,
          required: true,
        },
      ],
    },
    {
      name: 'testimonialQuote',
      type: 'group',
      label: 'Testimonial Quote',
      fields: [
        {
          name: 'quoteText',
          type: 'richText',
          label: 'Quote Text',
          required: true,
        },
        {
          name: 'attribution',
          type: 'text',
          label: 'Attribution (Optional)',
        },
      ],
    },
  ],
}