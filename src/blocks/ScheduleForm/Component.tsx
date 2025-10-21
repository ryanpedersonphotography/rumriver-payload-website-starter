import React from 'react'
import { FormBlock } from '@/blocks/Form/Component'

import type { ScheduleFormBlock } from '@/payload-types'

type ScheduleFormComponentProps = ScheduleFormBlock & {
  disableInnerContainer?: boolean
}

export const ScheduleFormComponent: React.FC<ScheduleFormComponentProps> = (props) => {
  const { sectionHeader, formConfig } = props

  // Default form structure for schedule tour
  const defaultForm = {
    id: 'schedule-tour-form',
    title: 'Schedule Tour',
    fields: [
      {
        name: 'name',
        label: 'Your Name',
        type: 'text',
        required: true,
        placeholder: 'John & Sarah',
        blockType: 'text'
      },
      {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        required: true,
        placeholder: 'your@email.com',
        blockType: 'email'
      },
      {
        name: 'phone',
        label: 'Phone Number',
        type: 'tel',
        required: true,
        placeholder: '(555) 123-4567',
        blockType: 'text'
      },
      {
        name: 'proposedEventDate',
        label: 'Proposed Event Date',
        type: 'date',
        required: false,
        blockType: 'text'
      },
      {
        name: 'preferredTourDate',
        label: 'Preferred Tour Date',
        type: 'date',
        required: true,
        blockType: 'text'
      },
      {
        name: 'preferredTourTime',
        label: 'Preferred Tour Time',
        type: 'select',
        required: false,
        options: [
          { label: 'Select Time', value: '' },
          { label: '10:00 AM', value: '10:00 AM' },
          { label: '11:00 AM', value: '11:00 AM' },
          { label: '1:00 PM', value: '1:00 PM' },
          { label: '2:00 PM', value: '2:00 PM' },
          { label: '3:00 PM', value: '3:00 PM' },
          { label: '4:00 PM', value: '4:00 PM' }
        ],
        blockType: 'select'
      },
      {
        name: 'guestCount',
        label: 'Estimated Guest Count',
        type: 'select',
        required: false,
        options: [
          { label: 'Select Range', value: '' },
          { label: '50-100 Guests', value: '50-100' },
          { label: '100-150 Guests', value: '100-150' },
          { label: '150-200 Guests', value: '150-200' },
          { label: '200+ Guests', value: '200+' }
        ],
        blockType: 'select'
      },
      {
        name: 'message',
        label: 'Additional Information or Questions',
        type: 'textarea',
        required: false,
        placeholder: 'Tell us about your event plans or any specific questions...',
        blockType: 'textarea'
      }
    ],
    submitButtonLabel: 'SCHEDULE TOUR',
    confirmationType: 'redirect',
    redirect: {
      url: '/thank-you'
    }
  }

  // Use provided form config or default
  const form = formConfig || defaultForm

  return (
    <section className="hotfix-schedule-tour">
      <div className="hotfix-form-container">
        <div className="hotfix-form-header">
          <p className="hotfix-form-script">
            {sectionHeader?.scriptAccent || "Schedule Your Tour"}
          </p>
          <h2 className="hotfix-form-title">
            {sectionHeader?.title || "Start Planning Your Perfect Day"}
          </h2>
          <p className="hotfix-form-description">
            {sectionHeader?.description || "We'd love to show you around our beautiful venue and discuss your wedding vision."}
          </p>
        </div>

        <div className="hotfix-tour-form">
          <form className="hotfix-form-grid">
            {/* Name - Full Width */}
            <div className="hotfix-form-group hotfix-form-full">
              <label htmlFor="name" className="hotfix-form-label">Your Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="hotfix-form-input"
                placeholder="John & Sarah"
              />
            </div>

            {/* Email and Phone - Two Column */}
            <div className="hotfix-form-row">
              <div className="hotfix-form-group">
                <label htmlFor="email" className="hotfix-form-label">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="hotfix-form-input"
                  placeholder="your@email.com"
                />
              </div>
              <div className="hotfix-form-group">
                <label htmlFor="phone" className="hotfix-form-label">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  className="hotfix-form-input"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {/* Event Date and Tour Date - Two Column */}
            <div className="hotfix-form-row">
              <div className="hotfix-form-group">
                <label htmlFor="proposedEventDate" className="hotfix-form-label">Proposed Event Date</label>
                <input 
                  type="date" 
                  id="proposedEventDate" 
                  name="proposedEventDate" 
                  className="hotfix-form-input"
                />
              </div>
              <div className="hotfix-form-group">
                <label htmlFor="preferredTourDate" className="hotfix-form-label">Preferred Tour Date *</label>
                <input 
                  type="date" 
                  id="preferredTourDate" 
                  name="preferredTourDate" 
                  required 
                  className="hotfix-form-input"
                />
              </div>
            </div>

            {/* Time and Guest Count - Two Column */}
            <div className="hotfix-form-row">
              <div className="hotfix-form-group">
                <label htmlFor="preferredTourTime" className="hotfix-form-label">Preferred Tour Time</label>
                <select 
                  id="preferredTourTime" 
                  name="preferredTourTime" 
                  className="hotfix-form-select"
                >
                  <option value="">Select Time</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                </select>
              </div>
              <div className="hotfix-form-group">
                <label htmlFor="guestCount" className="hotfix-form-label">Estimated Guest Count</label>
                <select 
                  id="guestCount" 
                  name="guestCount" 
                  className="hotfix-form-select"
                >
                  <option value="">Select Range</option>
                  <option value="50-100">50-100 Guests</option>
                  <option value="100-150">100-150 Guests</option>
                  <option value="150-200">150-200 Guests</option>
                  <option value="200+">200+ Guests</option>
                </select>
              </div>
            </div>

            {/* Message - Full Width */}
            <div className="hotfix-form-group hotfix-form-full">
              <label htmlFor="message" className="hotfix-form-label">Additional Information or Questions</label>
              <textarea 
                id="message" 
                name="message" 
                className="hotfix-form-textarea"
                placeholder="Tell us about your event plans or any specific questions..."
                rows={4}
              />
            </div>

            <button type="submit" className="hotfix-form-submit">
              SCHEDULE TOUR
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

// Block component version for CMS usage
export const ScheduleFormBlockComponent: React.FC<ScheduleFormComponentProps> = (props) => {
  return <ScheduleFormComponent {...props} />
}

// Direct component export for fallback usage
export const ScheduleForm = ScheduleFormComponent