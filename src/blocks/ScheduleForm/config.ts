import type { Block } from 'payload'

export const ScheduleForm: Block = {
  slug: 'scheduleForm',
  labels: {
    singular: 'Schedule Form',
    plural: 'Schedule Forms',
  },
  interfaceName: 'ScheduleFormBlock',
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
          defaultValue: 'Schedule Your Tour',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
          required: true,
          defaultValue: 'Start Planning Your Perfect Day',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          defaultValue: "We'd love to show you around our beautiful venue and discuss your wedding vision.",
        },
      ],
    },
    {
      name: 'formSettings',
      type: 'group',
      label: 'Form Settings',
      fields: [
        {
          name: 'timeSlots',
          type: 'array',
          label: 'Available Tour Time Slots',
          defaultValue: [
            { time: '10:00 AM' },
            { time: '11:00 AM' },
            { time: '1:00 PM' },
            { time: '2:00 PM' },
            { time: '3:00 PM' },
            { time: '4:00 PM' },
          ],
          fields: [
            {
              name: 'time',
              type: 'text',
              label: 'Time Slot',
              required: true,
            },
          ],
        },
        {
          name: 'guestCountRanges',
          type: 'array',
          label: 'Guest Count Options',
          defaultValue: [
            { label: '50-100 Guests', value: '50-100' },
            { label: '100-150 Guests', value: '100-150' },
            { label: '150-200 Guests', value: '150-200' },
            { label: '200+ Guests', value: '200+' },
          ],
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Display Label',
              required: true,
            },
            {
              name: 'value',
              type: 'text',
              label: 'Form Value',
              required: true,
            },
          ],
        },
        {
          name: 'submitButtonText',
          type: 'text',
          label: 'Submit Button Text',
          defaultValue: 'SCHEDULE TOUR',
        },
        {
          name: 'successRedirectUrl',
          type: 'text',
          label: 'Success Redirect URL',
          defaultValue: '/thank-you',
          admin: {
            description: 'URL to redirect to after successful form submission',
          },
        },
      ],
    },
    {
      name: 'emailSettings',
      type: 'group',
      label: 'Email Notification Settings',
      admin: {
        description: 'Configure where form submissions are sent',
      },
      fields: [
        {
          name: 'notificationEmail',
          type: 'email',
          label: 'Notification Email',
          defaultValue: 'info@rumriverbarn.com',
          admin: {
            description: 'Email address to receive form submissions',
          },
        },
        {
          name: 'fromEmail',
          type: 'email',
          label: 'From Email',
          defaultValue: 'forms@rumriverbarn.com',
          admin: {
            description: 'Email address form submissions appear to be sent from',
          },
        },
        {
          name: 'emailSubjectPrefix',
          type: 'text',
          label: 'Email Subject Prefix',
          defaultValue: 'New Tour Request',
          admin: {
            description: 'Prefix for email subjects (will be followed by customer name)',
          },
        },
      ],
    },
    {
      name: 'styling',
      type: 'group',
      label: 'Form Styling Options',
      fields: [
        {
          name: 'backgroundGradient',
          type: 'select',
          label: 'Background Style',
          defaultValue: 'default',
          options: [
            {
              label: 'Default Brown Gradient',
              value: 'default',
            },
            {
              label: 'Dark Elegance',
              value: 'dark',
            },
            {
              label: 'Light Cream',
              value: 'light',
            },
          ],
        },
        {
          name: 'formTransparency',
          type: 'number',
          label: 'Form Background Transparency',
          defaultValue: 95,
          min: 80,
          max: 100,
          admin: {
            description: 'Form background opacity percentage (80-100)',
          },
        },
        {
          name: 'enableAnimation',
          type: 'checkbox',
          label: 'Enable Background Animation',
          defaultValue: true,
        },
      ],
    },
  ],
}