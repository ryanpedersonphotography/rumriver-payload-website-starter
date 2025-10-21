import React from 'react'
import type { SocialProofBlock } from '@/payload-types'
import RichText from '@/components/RichText'

interface SocialProofProps {
  brandLogos?: Array<{
    brandName?: string
    displayOrder?: number
  }>
  testimonialQuote?: {
    quoteText?: any
    attribution?: string
  }
}

export const SocialProofBlockComponent: React.FC<{ block: SocialProofBlock }> = ({ block }) => {
  const {
    brandLogos = [
      { brandName: "THE KNOT", displayOrder: 1 },
      { brandName: "WEDDINGWIRE", displayOrder: 2 },
      { brandName: "MARTHA STEWART", displayOrder: 3 },
      { brandName: "MINNESOTA BRIDE", displayOrder: 4 }
    ],
    testimonialQuote = {
      quoteText: [
        {
          children: [
            { text: '"Rum River Barn isn\'t just a venue—it\'s ' },
            { text: 'where dreams come to life', bold: true, italic: true },
            { text: '. Their commitment to saying \'yes\' to every couple\'s vision sets them apart as ' },
            { text: 'Minnesota\'s most accommodating wedding destination', bold: true, italic: true },
            { text: '."' }
          ]
        }
      ]
    }
  } = block

  // Sort brand logos by display order
  const sortedLogos = [...brandLogos].sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0))

  // Render quote text with highlights
  const renderQuoteText = (content: any) => {
    if (!content || !Array.isArray(content)) {
      return '"Rum River Barn isn\'t just a venue—it\'s where dreams come to life. Their commitment to saying \'yes\' to every couple\'s vision sets them apart as Minnesota\'s most accommodating wedding destination."'
    }

    return content.map((node: any, index: number) => {
      if (node.children) {
        return node.children.map((child: any, childIndex: number) => {
          if (child.bold && child.italic) {
            return (
              <span key={`${index}-${childIndex}`} className="hotfix-highlight">
                {child.text}
              </span>
            )
          }
          return child.text
        })
      }
      return null
    })
  }

  return (
    <section className="hotfix-brand-quote-section">
      <div className="hotfix-brand-quote-content">
        {/* Brand Logos Section */}
        <div className="hotfix-brand-logos">
          {sortedLogos.map((logo, index) => (
            <span key={index} className="hotfix-brand-logo">
              {logo.brandName}
            </span>
          ))}
        </div>
        
        {/* Testimonial Quote */}
        <div className="hotfix-brand-quote-text">
          {renderQuoteText(testimonialQuote.quoteText)}
        </div>
      </div>
    </section>
  )
}

// Presentational SocialProof component for direct use
export const SocialProof: React.FC<SocialProofProps> = (props) => {
  return (
    <SocialProofBlockComponent 
      block={{
        blockType: 'socialProof',
        blockName: 'Social Proof Section',
        ...props
      } as SocialProofBlock} 
    />
  )
}