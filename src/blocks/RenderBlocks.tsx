import React, { Fragment } from 'react'

import type { Page, Home } from '@/payload-types'

import { AlternatingBlocksComponent } from '@/blocks/AlternatingBlocks/Component'
import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { GalleryBlockComponent } from '@/blocks/Gallery/Component'
import { HeroBlockComponent } from '@/blocks/Hero/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { SocialProofBlockComponent } from '@/blocks/SocialProof/Component'
import { TestimonialsBlockComponent } from '@/blocks/Testimonials/Component'
import { HistoryCarouselBlockComponent } from '@/blocks/HistoryCarousel/Component'

const blockComponents = {
  alternatingBlocks: AlternatingBlocksComponent,
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  gallery: GalleryBlockComponent,
  hero: HeroBlockComponent,
  mediaBlock: MediaBlock,
  socialProof: SocialProofBlockComponent,
  testimonials: TestimonialsBlockComponent,
  historyCarousel: HistoryCarouselBlockComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][] | Home['blocks']
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
