import React from 'react'
import { 
  MapPinIcon, 
  QuestionMarkCircleIcon, 
  RadioIcon, 
  BuildingOfficeIcon,
  ArrowsPointingOutIcon 
} from "@heroicons/react/24/outline"

import type { MapSectionBlock } from '@/payload-types'

type MapSectionComponentProps = MapSectionBlock & {
  disableInnerContainer?: boolean
}

export const MapSectionComponent: React.FC<MapSectionComponentProps> = (props) => {
  const { 
    sectionHeader, 
    venueLocation, 
    mapSettings, 
    locationDetails 
  } = props

  // Default location details for testing/fallback
  const defaultLocationDetails = [
    {
      icon: <MapPinIcon className="hotfix-icon" />,
      title: "Address",
      content: (
        <>
          42618 78th Street<br />Hillman, MN 56338
        </>
      )
    },
    {
      icon: <QuestionMarkCircleIcon className="hotfix-icon" />,
      title: "Easy Access From",
      content: (
        <>
          45 min from Minneapolis<br />30 min from St. Cloud<br />1 hour from Brainerd
        </>
      )
    },
    {
      icon: <RadioIcon className="hotfix-icon" />,
      title: "Nearest Airport",
      content: (
        <>
          Minneapolis-St. Paul International<br />55 miles (1 hour drive)
        </>
      )
    },
    {
      icon: <BuildingOfficeIcon className="hotfix-icon" />,
      title: "Accommodations",
      content: (
        <>
          Partner hotels in Princeton & Milaca<br />Group rates available
        </>
      )
    }
  ]

  // Use provided location details or default
  const details = locationDetails && locationDetails.length > 0 ? locationDetails : defaultLocationDetails

  // Default map settings
  const defaultMapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.8985775673544!2d-93.7851842!3d45.8936111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b39b1c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s42618%2078th%20St%2C%20Hillman%2C%20MN%2056338!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
  const defaultDirectionsUrl = "https://www.google.com/maps/dir//42618+78th+Street,+Hillman,+MN+56338"
  const defaultFullMapUrl = "https://www.google.com/maps/place/42618+78th+St,+Hillman,+MN+56338"

  const mapEmbedUrl = mapSettings?.embedUrl || defaultMapEmbedUrl
  const directionsUrl = mapSettings?.directionsUrl || defaultDirectionsUrl
  const fullMapUrl = mapSettings?.fullMapUrl || defaultFullMapUrl

  return (
    <section className="hotfix-map-section">
      <div className="hotfix-map-container">
        {/* Left Panel - Location Information */}
        <div className="hotfix-map-info">
          <div className="hotfix-map-header">
            <div className="hotfix-script-accent">
              {sectionHeader?.scriptAccent || "Interactive Location"}
            </div>
            <h2 className="hotfix-map-title">
              {sectionHeader?.title || "Find Your Way to Forever"}
            </h2>
            <p className="hotfix-map-lead">
              {sectionHeader?.description || 
               "Discover our beautiful venue nestled in the heart of Minnesota, where your love story will unfold in perfect harmony with nature."
              }
            </p>
          </div>
          
          <div className="hotfix-location-details">
            {details.map((item, index) => (
              <div key={index} className="hotfix-location-item">
                <div className="hotfix-location-icon">
                  {typeof item.icon === 'string' ? (
                    <MapPinIcon className="hotfix-icon" />
                  ) : (
                    item.icon
                  )}
                </div>
                <div className="hotfix-location-text">
                  <h4>{item.title}</h4>
                  <div>{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Panel - Interactive Map */}
        <div className="hotfix-map-embed">
          <iframe
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Rum River Barn Location - 42618 78th Street, Hillman, MN 56338"
          />
          
          <div className="hotfix-map-overlay">
            <a 
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hotfix-map-action-btn"
            >
              <MapPinIcon className="hotfix-icon-sm" />
              Get Directions
            </a>
            <a 
              href={fullMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hotfix-map-action-btn"
            >
              <ArrowsPointingOutIcon className="hotfix-icon-sm" />
              Full Map
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Block component version for CMS usage
export const MapSectionBlockComponent: React.FC<MapSectionComponentProps> = (props) => {
  return <MapSectionComponent {...props} />
}

// Direct component export for fallback usage
export const MapSection = MapSectionComponent