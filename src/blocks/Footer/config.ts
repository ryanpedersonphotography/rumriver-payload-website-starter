import type { Block } from 'payload'

export const Footer: Block = {
  slug: 'footer',
  labels: {
    singular: 'Footer',
    plural: 'Footers',
  },
  interfaceName: 'FooterBlock',
  fields: [
    {
      name: 'businessInfo',
      type: 'group',
      label: 'Business Information',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Business Name',
          defaultValue: 'Rum River Wedding Barn',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Business Description',
          defaultValue: 'Where dreams come to life along Minnesota\'s scenic Rum River. Historic charm meets modern elegance for your perfect celebration.',
        },
      ],
    },
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Contact Information',
      fields: [
        {
          name: 'address',
          type: 'group',
          label: 'Address',
          fields: [
            {
              name: 'street',
              type: 'text',
              label: 'Street Address',
              defaultValue: '42618 78th Street',
              required: true,
            },
            {
              name: 'city',
              type: 'text',
              label: 'City',
              defaultValue: 'Hillman',
              required: true,
            },
            {
              name: 'state',
              type: 'text',
              label: 'State',
              defaultValue: 'MN',
              required: true,
            },
            {
              name: 'zipCode',
              type: 'text',
              label: 'ZIP Code',
              defaultValue: '56338',
              required: true,
            },
          ],
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Phone Number',
          defaultValue: '612-801-0546',
          required: true,
        },
        {
          name: 'email',
          type: 'text',
          label: 'Email Address',
          defaultValue: 'info@rumriverbarn.com',
          required: true,
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Media Links',
      defaultValue: [
        {
          platform: 'facebook',
          url: 'https://facebook.com/rumriverbarn',
          label: 'Follow us on Facebook',
        },
        {
          platform: 'instagram',
          url: 'https://instagram.com/rumriverbarn',
          label: 'Follow us on Instagram',
        },
      ],
      fields: [
        {
          name: 'platform',
          type: 'select',
          label: 'Social Platform',
          required: true,
          options: [
            {
              label: 'Facebook',
              value: 'facebook',
            },
            {
              label: 'Instagram',
              value: 'instagram',
            },
            {
              label: 'Twitter/X',
              value: 'twitter',
            },
            {
              label: 'LinkedIn',
              value: 'linkedin',
            },
            {
              label: 'YouTube',
              value: 'youtube',
            },
          ],
        },
        {
          name: 'url',
          type: 'text',
          label: 'Social Media URL',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          label: 'Accessibility Label',
          required: true,
          admin: {
            description: 'Text for screen readers (e.g., "Follow us on Facebook")',
          },
        },
      ],
    },
    {
      name: 'styling',
      type: 'group',
      label: 'Footer Styling',
      fields: [
        {
          name: 'showGlassmorphicEffect',
          type: 'checkbox',
          label: 'Enable Glassmorphic Effect',
          defaultValue: true,
          admin: {
            description: 'Show the glassmorphic overlay and dot pattern',
          },
        },
        {
          name: 'showDecorativeElements',
          type: 'checkbox',
          label: 'Show Decorative Elements',
          defaultValue: true,
          admin: {
            description: 'Show underlines, borders, and other decorative elements',
          },
        },
      ],
    },
    {
      name: 'copyrightText',
      type: 'text',
      label: 'Copyright Text (optional)',
      admin: {
        description: 'Leave blank to use auto-generated copyright with current year',
      },
    },
  ],
}