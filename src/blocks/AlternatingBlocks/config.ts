import type { Block } from 'payload'

export const AlternatingBlocks: Block = {
  slug: 'alternatingBlocks',
  interfaceName: 'AlternatingBlocksBlock',
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
          defaultValue: 'Your Perfect Venue',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
          defaultValue: 'Why Choose Rum River Barn',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Section Description',
          defaultValue: 'Discover what makes our venue the perfect setting for your unforgettable celebration',
          required: true,
        },
      ],
    },
    {
      name: 'blocks',
      type: 'array',
      label: 'Content Blocks',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'number',
          type: 'text',
          label: 'Block Number',
          defaultValue: '01',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Block Title',
          required: true,
        },
        {
          name: 'lead',
          type: 'text',
          label: 'Lead Text',
          required: false,
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Block Content',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Block Image',
          required: true,
        },
        {
          name: 'layout',
          type: 'select',
          label: 'Layout',
          defaultValue: 'normal',
          options: [
            {
              label: 'Normal (Image Right)',
              value: 'normal',
            },
            {
              label: 'Reverse (Image Left)',
              value: 'reverse',
            },
          ],
          required: true,
        },
      ],
    },
  ],
}