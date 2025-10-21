import type { Block } from 'payload'

export const HistoryCarousel: Block = {
  slug: 'historyCarousel',
  labels: {
    singular: 'History Carousel',
    plural: 'History Carousels',
  },
  interfaceName: 'HistoryCarouselBlock',
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
          defaultValue: 'Through the Years',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
          required: true,
          defaultValue: 'Our Story',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          defaultValue: 'Discover the rich history of Rum River Barn through authentic photographs spanning over 100 years',
        },
      ],
    },
    {
      name: 'historySlides',
      type: 'array',
      label: 'Historical Timeline Slides',
      minRows: 1,
      maxRows: 10,
      defaultValue: [
        {
          year: '1914',
          title: 'Norwegian Settlers Arrive',
          description: 'Sigvart and Helga Selmer, Norwegian immigrants, settled the land and built their first one-room house.',
          image: '/images/venue/property-field-wildflowers-natural.jpg',
        },
        {
          year: '1932',
          title: 'Discovery of the Giant White Pine',
          description: 'Sigvart and his sons found a massive white pine that took seven horses to pull to the farm.',
          image: '/images/venue/property-field-wildflowers-natural.jpg',
        },
        {
          year: '1942-1952',
          title: 'White Barn Construction',
          description: 'The iconic White Barn was built using lumber from the giant white pine, dried for 20 years.',
          image: '/images/venue/barn-interior-ceiling-beams-lighting.jpg',
        },
        {
          year: '1959-2003',
          title: 'Harold Selmer\'s Farming Legacy',
          description: 'Harold transformed the farm into a successful dairy operation, maintaining family traditions.',
          image: '/images/venue/barn-exterior-full-deck-view-evening.jpg',
        },
        {
          year: '2006',
          title: 'First Wedding Event',
          description: 'Rum River Barn hosted its first wedding, marking the beginning of a new era as an event venue.',
          image: '/wedding-photos/anthony-and-linnea/anthony-linnea-2024-001.jpg',
        },
        {
          year: 'Today',
          title: 'Minnesota\'s Premier Barn Venue',
          description: 'Operating as Minnesota\'s premier country and barn event venue for over 18 years.',
          image: '/wedding-photos/loria-and-jason-rolstad-agape/loria-jason-wedding-ceremony.jpg',
        },
      ],
      fields: [
        {
          name: 'year',
          type: 'text',
          label: 'Year or Time Period',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Historical Event Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Event Description',
          required: true,
        },
        {
          name: 'image',
          type: 'text',
          label: 'Historical Image URL',
          required: true,
          admin: {
            description: 'URL to historical photograph for this time period',
          },
        },
      ],
    },
    {
      name: 'carouselSettings',
      type: 'group',
      label: 'Carousel Settings',
      fields: [
        {
          name: 'autoplay',
          type: 'checkbox',
          label: 'Enable Autoplay',
          defaultValue: true,
        },
        {
          name: 'slideInterval',
          type: 'number',
          label: 'Slide Interval (milliseconds)',
          defaultValue: 5000,
          admin: {
            description: 'Time between automatic slide transitions (default: 5000ms = 5 seconds)',
            condition: (data) => data.autoplay === true,
          },
        },
        {
          name: 'showControls',
          type: 'checkbox',
          label: 'Show Navigation Controls',
          defaultValue: true,
        },
        {
          name: 'showIndicators',
          type: 'checkbox',
          label: 'Show Progress Indicators',
          defaultValue: true,
        },
      ],
    },
  ],
}