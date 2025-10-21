import type { Block } from 'payload'

export const Testimonials: Block = {
  slug: 'testimonials',
  interfaceName: 'TestimonialsBlock',
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
          defaultValue: 'Love Letters',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
          defaultValue: 'What Couples Say',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Section Description',
          defaultValue: 'Real stories from real couples who celebrated at Rum River Barn',
          required: true,
        },
      ],
    },
    {
      name: 'testimonials',
      type: 'array',
      label: 'Customer Testimonials',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          label: 'Testimonial Quote',
          required: true,
        },
        {
          name: 'customerName',
          type: 'text',
          label: 'Customer Name',
          required: true,
        },
        {
          name: 'avatarImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Customer Avatar',
          required: true,
        },
        {
          name: 'starRating',
          type: 'number',
          label: 'Star Rating',
          defaultValue: 5,
          min: 1,
          max: 5,
          required: true,
        },
        {
          name: 'galleryLink',
          type: 'text',
          label: 'Gallery Link',
          defaultValue: '/gallery',
        },
        {
          name: 'ctaText',
          type: 'text',
          label: 'CTA Text',
          defaultValue: 'View Their Wedding Gallery',
        },
      ],
    },
  ],
}