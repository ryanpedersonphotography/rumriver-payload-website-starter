import React from 'react'
import Image from 'next/image'
import RichText from '@/components/RichText'
import type { AlternatingBlocksBlock, Media } from '@/payload-types'

interface AlternatingBlocksProps {
  sectionHeader?: {
    scriptAccent?: string
    title?: string
    description?: string
  }
  blocks?: Array<{
    number?: string
    title?: string
    lead?: string
    content?: any
    image?: string | Media
    layout?: 'normal' | 'reverse'
  }>
}

export const AlternatingBlocksComponent: React.FC<{ block: AlternatingBlocksBlock }> = ({ block }) => {
  const {
    sectionHeader = {
      scriptAccent: 'Your Perfect Venue',
      title: 'Why Choose Rum River Barn',
      description: 'Discover what makes our venue the perfect setting for your unforgettable celebration'
    },
    blocks = []
  } = block

  // Get image URL from Media object or string
  const getImageUrl = (image: string | Media | undefined): string => {
    if (!image) return ''
    if (typeof image === 'string') return image
    return image.url || ''
  }

  return (
    <section className="hotfix-alternating-blocks">
      <div className="hotfix-content-wrapper">
        {/* Section Header */}
        <div className="hotfix-section-header">
          <div className="hotfix-script-accent">{sectionHeader.scriptAccent}</div>
          <h2 className="hotfix-section-title">{sectionHeader.title}</h2>
          <p className="hotfix-lead">{sectionHeader.description}</p>
        </div>

        {/* Alternating Blocks */}
        <div className="hotfix-blocks-container">
          {blocks?.map((blockItem, index) => {
            const imageUrl = getImageUrl(blockItem.image)
            const isReverse = blockItem.layout === 'reverse'
            
            return (
              <div 
                key={index} 
                className={`hotfix-block-item ${isReverse ? 'reverse' : ''}`}
              >
                <div className="hotfix-block-content">
                  <div className="hotfix-number">{blockItem.number}</div>
                  <h3>{blockItem.title}</h3>
                  {blockItem.lead && (
                    <p className="hotfix-block-lead">{blockItem.lead}</p>
                  )}
                  {blockItem.content && (
                    <div className="block-content">
                      {/* For testing, render simple paragraphs if content is an array */}
                      {Array.isArray(blockItem.content) ? (
                        blockItem.content.map((paragraph: any, pIndex: number) => (
                          <p key={pIndex}>
                            {Array.isArray(paragraph.children) 
                              ? paragraph.children.map((child: any) => child.text).join('')
                              : paragraph.text || paragraph
                            }
                          </p>
                        ))
                      ) : (
                        <RichText content={blockItem.content} />
                      )}
                    </div>
                  )}
                </div>
                <div className="hotfix-block-image">
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={blockItem.title || ''}
                      width={800}
                      height={500}
                      className="block-image"
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Presentational AlternatingBlocks component for direct use
export const AlternatingBlocks: React.FC<AlternatingBlocksProps> = (props) => {
  return (
    <AlternatingBlocksComponent 
      block={{
        blockType: 'alternatingBlocks',
        blockName: 'Alternating Blocks',
        ...props
      } as AlternatingBlocksBlock} 
    />
  )
}