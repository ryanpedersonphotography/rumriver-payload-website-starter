import React from 'react'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  UserGroupIcon,
  CameraIcon 
} from '@heroicons/react/24/outline'

import type { FooterBlock } from '@/payload-types'

type FooterComponentProps = FooterBlock & {
  disableInnerContainer?: boolean
}

export const FooterComponent: React.FC<FooterComponentProps> = (props) => {
  const { 
    businessInfo,
    contactInfo,
    socialLinks,
    styling,
    copyrightText
  } = props

  // Default business info
  const defaultBusinessName = 'Rum River Wedding Barn'
  const defaultBusinessDescription = 'Where dreams come to life along Minnesota\'s scenic Rum River. Historic charm meets modern elegance for your perfect celebration.'

  // Default contact info
  const defaultAddress = {
    street: '42618 78th Street',
    city: 'Hillman',
    state: 'MN',
    zipCode: '56338'
  }
  const defaultPhone = '612-801-0546'
  const defaultEmail = 'info@rumriverbarn.com'

  // Default social links
  const defaultSocialLinks = [
    {
      platform: 'facebook',
      url: 'https://facebook.com/rumriverbarn',
      label: 'Follow us on Facebook'
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/rumriverbarn',
      label: 'Follow us on Instagram'
    }
  ]

  // Use provided data or defaults
  const businessName = businessInfo?.name || defaultBusinessName
  const businessDescription = businessInfo?.description || defaultBusinessDescription
  
  const address = contactInfo?.address || defaultAddress
  const phone = contactInfo?.phone || defaultPhone
  const email = contactInfo?.email || defaultEmail
  
  const socials = socialLinks && socialLinks.length > 0 ? socialLinks : defaultSocialLinks

  // Format address for display
  const fullAddress = `${address.street}, ${address.city}, ${address.state} ${address.zipCode}`

  // Get icon for social platform
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'facebook':
        return UserGroupIcon
      case 'instagram':
        return CameraIcon
      case 'twitter':
      case 'x':
        return UserGroupIcon // You could add TwitterIcon if available
      default:
        return UserGroupIcon
    }
  }

  // Generate copyright text
  const currentYear = new Date().getFullYear()
  const copyright = copyrightText || `© ${currentYear} ${businessName}. All rights reserved.`

  return (
    <footer className="hotfix-footer">
      <div className="hotfix-footer-container">
        <div className="hotfix-footer-content">
          {/* Column 1: Brand & Description */}
          <div className="hotfix-footer-section">
            <h3 className="hotfix-footer-title">{businessName}</h3>
            <p className="hotfix-footer-description">
              {businessDescription}
            </p>
          </div>

          {/* Column 2: Contact Information */}
          <div className="hotfix-footer-section">
            <h4 className="hotfix-footer-title">Contact Information</h4>
            <div className="hotfix-footer-contact">
              <p className="hotfix-address">
                <MapPinIcon className="hotfix-social-icon" />
                {fullAddress}
              </p>
              <a href={`tel:${phone.replace(/[^\d]/g, '')}`} className="hotfix-phone-link">
                <PhoneIcon className="hotfix-social-icon" />
                {phone}
              </a>
              <a href={`mailto:${email}`} className="hotfix-phone-link">
                <EnvelopeIcon className="hotfix-social-icon" />
                {email}
              </a>
            </div>
          </div>

          {/* Column 3: Social Links */}
          <div className="hotfix-footer-section">
            <h4 className="hotfix-footer-title">Connect With Us</h4>
            <div className="hotfix-social-links">
              {socials.map((link, index) => {
                const IconComponent = getSocialIcon(link.platform)
                return (
                  <a
                    key={index}
                    href={link.url}
                    className="hotfix-social-link"
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={link.label}
                  >
                    <IconComponent className="hotfix-social-icon" />
                    {link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Footer Bottom with Copyright */}
        <div className="hotfix-footer-bottom">
          <div className="hotfix-copyright">
            {copyright}
          </div>
        </div>
      </div>
    </footer>
  )
}

// Block component version for CMS usage
export const FooterBlockComponent: React.FC<FooterComponentProps> = (props) => {
  return <FooterComponent {...props} />
}

// Direct component export for fallback usage
export const Footer = FooterComponent