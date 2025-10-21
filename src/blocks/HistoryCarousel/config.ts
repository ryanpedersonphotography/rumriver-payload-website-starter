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
          image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=800&h=600&fit=crop&auto=format&q=80',
        },
        {
          year: '1932',
          title: 'Discovery of the Giant White Pine',
          description: 'Sigvart and his sons found a massive white pine that took seven horses to pull to the farm.',
          image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&auto=format&q=80',
        },
        {
          year: '1942-1952',
          title: 'White Barn Construction',
          description: 'The iconic White Barn was built using lumber from the giant white pine, dried for 20 years.',
          image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop&auto=format&q=80',
        },
        {
          year: '1959-2003',
          title: 'Harold Selmer\'s Farming Legacy',
          description: 'Harold transformed the farm into a successful dairy operation, maintaining family traditions.',
          image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=600&fit=crop&auto=format&q=80',
        },
        {
          year: '2006',
          title: 'First Wedding Event',
          description: 'Rum River Barn hosted its first wedding, marking the beginning of a new era as an event venue.',
          image: 'https://images.unsplash.com/photo-1519167758481-83f29ba5fe86?w=800&h=600&fit=crop&auto=format&q=80',
        },
        {
          year: 'Today',
          title: 'Minnesota\'s Premier Barn Venue',
          description: 'Operating as Minnesota\'s premier country and barn event venue for over 18 years.',
          image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&auto=format&q=80',
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