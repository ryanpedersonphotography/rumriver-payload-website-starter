import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { GalleryBlock, Media } from '@/payload-types'

interface GalleryProps {
  sectionHeader?: {
    scriptAccent?: string
    title?: string
    description?: string
  }
  galleries?: Array<{
    coupleNames?: string
    season?: string
    photoCount?: string
    venue?: string
    image?: string | Media
    galleryLink?: string
    gridSpan?: 'normal' | 'wide' | 'featured'
  }>
}

export const GalleryBlockComponent: React.FC<{ block: GalleryBlock }> = ({ block }) => {
  const {
    sectionHeader = {
      scriptAccent: 'Real Love Stories',
      title: 'Weddings at the Barn',
      description: 'Every celebration tells a unique story of love, laughter, and happily ever after.'
    },
    galleries = []
  } = block

  // Get image URL from Media object or string
  const getImageUrl = (image: string | Media | undefined): string => {
    if (!image) return ''
    if (typeof image === 'string') return image
    return image.url || ''
  }

  return (
    <section className="hotfix-love-stories-gallery">
      <div className="hotfix-love-stories-content">
        {/* Section Header */}
        <div className="hotfix-love-stories-header">
          <div className="hotfix-script-accent">{sectionHeader.scriptAccent}</div>
          <h2 className="hotfix-love-section-title">{sectionHeader.title}</h2>
          <p className="hotfix-love-lead">{sectionHeader.description}</p>
        </div>

        {/* Wedding Gallery Grid */}
        <div className="hotfix-wedding-gallery">
          {galleries?.map((gallery, index) => {
            const imageUrl = getImageUrl(gallery.image)
            const gridSpanClass = gallery.gridSpan === 'featured' ? 'span-featured' : 
                                 gallery.gridSpan === 'wide' ? 'span-wide' : ''
            
            return (
              <Link
                key={index}
                href={gallery.galleryLink || '#'}
                className={`hotfix-gallery-item ${gridSpanClass}`}
                data-discover="true"
              >
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={`${gallery.coupleNames} Wedding`}
                    width={800}
                    height={800}
                    className="gallery-image"
                  />
                )}
                <div className="hotfix-gallery-overlay">
                  <div className="hotfix-gallery-couple-names">{gallery.coupleNames}</div>
                  <div className="hotfix-gallery-season">{gallery.season}</div>
                  <div className="hotfix-gallery-details">
                    {gallery.photoCount} • {gallery.venue}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Presentational Gallery component for direct use
export const Gallery: React.FC<GalleryProps> = (props) => {
  return (
    <GalleryBlockComponent 
      block={{
        blockType: 'gallery',
        blockName: 'Gallery Section',
        ...props
      } as GalleryBlock} 
    />
  )
}