import { getPayload } from 'payload'
import config from '../src/payload.config'
import fs from 'fs'
import path from 'path'

async function createBetaHomePage() {
  console.log('Creating Beta Home Page...')
  
  const payload = await getPayload({ config })

  try {
    // Check if barn image exists
    const barnImagePath = '/Users/ryanpederson/Dev/websites/rumriver-payload-website-starter/public/images/venue/barn-exterior-full-deck-view-evening.jpg'
    
    let barnImageDoc
    if (fs.existsSync(barnImagePath)) {
      console.log('Uploading barn image to media...')
      
      // Read the barn image file
      const imageBuffer = fs.readFileSync(barnImagePath)
      
      // Upload barn image to CMS media
      barnImageDoc = await payload.create({
        collection: 'media',
        data: {
          alt: 'Rum River Wedding Barn - Exterior with deck view in evening',
        },
        file: {
          name: 'barn-exterior-full-deck-view-evening.jpg',
          data: imageBuffer,
          mimetype: 'image/jpeg',
          size: imageBuffer.length,
        },
      })
      
      console.log(`✅ Barn image uploaded with ID: ${barnImageDoc.id}`)
    } else {
      console.log('⚠️ Barn image not found, will use fallback')
    }

    // Create Beta Home Page with Hero block
    const betaHomePage = await payload.create({
      collection: 'pages',
      context: {
        disableRevalidate: true,
      },
      data: {
        title: 'Beta Home Page',
        slug: 'beta-home-page',
        layout: [
          {
            blockType: 'hero',
            kicker: 'Where Dreams Begin',
            title: 'Rum River',
            titleAccent: 'Wedding Barn',
            description: 'Nestled along Minnesota\'s scenic Rum River, our historic barn offers the perfect blend of rustic charm and modern elegance for your once-in-a-lifetime celebration.',
            ctaText: 'Schedule Your Visit',
            ctaLink: '/contact',
            backgroundImage: barnImageDoc?.id || null,
            scrollText: 'Discover Your Perfect Day',
          }
        ],
        meta: {
          title: 'Beta Home Page - Rum River Wedding Barn',
          description: 'Test page for CMS-managed hero section',
        },
        publishedAt: new Date().toISOString(),
        _status: 'published'
      }
    })

    console.log(`✅ Beta Home Page created successfully!`)
    console.log(`🔗 Page ID: ${betaHomePage.id}`)
    console.log(`🌐 Visit: http://localhost:3030/beta-home-page`)
    
  } catch (error) {
    console.error('❌ Error creating Beta Home Page:', error)
  }
}

createBetaHomePage()