import type { Block } from 'payload'

export const MapSection: Block = {
  slug: 'mapSection',
  labels: {
    singular: 'Map Section',
    plural: 'Map Sections',
  },
  interfaceName: 'MapSectionBlock',
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
          defaultValue: 'Interactive Location',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
          required: true,
          defaultValue: 'Find Your Way to Forever',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          defaultValue: 'Discover our beautiful venue nestled in the heart of Minnesota, where your love story will unfold in perfect harmony with nature.',
        },
      ],
    },
    {
      name: 'venueLocation',
      type: 'group',
      label: 'Venue Location Information',
      fields: [
        {
          name: 'streetAddress',
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
        {
          name: 'coordinates',
          type: 'group',
          label: 'GPS Coordinates',
          fields: [
            {
              name: 'latitude',
              type: 'number',
              label: 'Latitude',
              defaultValue: 45.8936111,
            },
            {
              name: 'longitude',
              type: 'number',
              label: 'Longitude',
              defaultValue: -93.7851842,
            },
          ],
        },
      ],
    },
    {
      name: 'locationDetails',
      type: 'array',
      label: 'Location Information Cards',
      defaultValue: [
        {
          title: 'Address',
          content: '42618 78th Street\nHillman, MN 56338',
          iconType: 'map-pin',
        },
        {
          title: 'Easy Access From',
          content: '45 min from Minneapolis\n30 min from St. Cloud\n1 hour from Brainerd',
          iconType: 'question-mark-circle',
        },
        {
          title: 'Nearest Airport',
          content: 'Minneapolis-St. Paul International\n55 miles (1 hour drive)',
          iconType: 'radio',
        },
        {
          title: 'Accommodations',
          content: 'Partner hotels in Princeton & Milaca\nGroup rates available',
          iconType: 'building-office',
        },
      ],
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Card Title',
          required: true,
        },
        {
          name: 'content',
          type: 'textarea',
          label: 'Card Content',
          required: true,
          admin: {
            description: 'Use line breaks for multiple lines of text',
          },
        },
        {
          name: 'iconType',
          type: 'select',
          label: 'Icon Type',
          defaultValue: 'map-pin',
          options: [
            {
              label: 'Map Pin (Location)',
              value: 'map-pin',
            },
            {
              label: 'Question Mark Circle (Info)',
              value: 'question-mark-circle',
            },
            {
              label: 'Radio/Signal (Airport)',
              value: 'radio',
            },
            {
              label: 'Building Office (Hotels)',
              value: 'building-office',
            },
            {
              label: 'Clock (Time)',
              value: 'clock',
            },
            {
              label: 'Phone (Contact)',
              value: 'phone',
            },
          ],
        },
      ],
    },
    {
      name: 'mapSettings',
      type: 'group',
      label: 'Google Maps Configuration',
      fields: [
        {
          name: 'embedUrl',
          type: 'text',
          label: 'Google Maps Embed URL',
          defaultValue: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d-93.7851842!3d45.8936111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s42618%2078th%20St%2C%20Hillman%2C%20MN%2056338!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus',
          admin: {
            description: 'Get this from Google Maps > Share > Embed a map',
          },
        },
        {
          name: 'directionsUrl',
          type: 'text',
          label: 'Directions URL',
          defaultValue: 'https://www.google.com/maps/dir//42618+78th+Street,+Hillman,+MN+56338',
          admin: {
            description: 'Google Maps directions link',
          },
        },
        {
          name: 'fullMapUrl',
          type: 'text',
          label: 'Full Map URL',
          defaultValue: 'https://www.google.com/maps/place/42618+78th+St,+Hillman,+MN+56338',
          admin: {
            description: 'Link to full Google Maps view',
          },
        },
        {
          name: 'showActionButtons',
          type: 'checkbox',
          label: 'Show Action Buttons',
          defaultValue: true,
          admin: {
            description: 'Show "Get Directions" and "Full Map" buttons',
          },
        },
      ],
    },
    {
      name: 'styling',
      type: 'group',
      label: 'Section Styling',
      fields: [
        {
          name: 'leftPanelBackground',
          type: 'select',
          label: 'Left Panel Background',
          defaultValue: 'cream',
          options: [
            {
              label: 'Cream Pearl',
              value: 'cream',
            },
            {
              label: 'White',
              value: 'white',
            },
            {
              label: 'Light Gray',
              value: 'light-gray',
            },
          ],
        },
        {
          name: 'fullHeight',
          type: 'checkbox',
          label: 'Full Viewport Height',
          defaultValue: true,
          admin: {
            description: 'Make section fill the full viewport height',
          },
        },
        {
          name: 'splitLayout',
          type: 'checkbox',
          label: 'Split Screen Layout',
          defaultValue: true,
          admin: {
            description: 'Use 50/50 split layout on desktop',
          },
        },
      ],
    },
  ],
}