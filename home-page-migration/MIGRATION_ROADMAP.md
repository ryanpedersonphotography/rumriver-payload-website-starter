# Migration Roadmap - Romantic Wedding Barn Theme

## Overview
This roadmap provides a systematic approach for migrating all home page design sections from the hotfix implementation to the official Payload CMS template. Each section should be implemented as a separate feature branch and validated for design fidelity before proceeding to the next.

## 🎯 Migration Objectives
- **100% Design Fidelity**: Preserve every visual detail from the hotfix design
- **Component Architecture**: Convert to reusable Payload blocks
- **Performance Optimization**: Implement modern web standards
- **Accessibility Compliance**: Ensure full a11y support
- **TypeScript Integration**: Full type safety throughout

## 📋 Pre-Migration Setup

### ✅ Repository Preparation
- [ ] Clone target repository: `https://github.com/ryanpedersonphotography/rumriver-payload-website-starter`
- [ ] Install dependencies: `pnpm install`
- [ ] Verify development environment: `pnpm dev`
- [ ] Create migration tracking branch: `git checkout -b migration/home-page-tracking`

### ✅ Asset Preparation
- [ ] Review all migration packages in `/home-page-migration/`
- [ ] Copy shared assets: design tokens, animations, documentation
- [ ] **SYSTEMATIC IMAGE MIGRATION**: Copy ALL essential images from `/migration-images/` to `/public/images/` using comprehensive migration strategy
- [ ] **REPLACE EXTERNAL ASSETS**: Replace all Unsplash placeholder URLs with appropriate photos from migration-images folder
- [ ] Test font loading: Dancing Script, Playfair Display, Montserrat

### 🎯 **IMPLEMENTATION CLARIFICATIONS** (Updated)

#### **Image Migration Strategy**
- **Approach**: Comprehensive upfront migration of all essential images
- **Source**: `/home-page-migration/migration-images/` (thousands of professional photos)
- **Target**: `/public/images/` with organized subdirectories
- **Priority**: Copy images systematically as needed for each phase

#### **External Asset Replacement**
- **Unsplash URLs**: Replace with appropriate photos from migration-images
- **Testimonial Avatars**: Use actual wedding photos instead of stock images  
- **Gallery Content**: Use real wedding galleries from blog-images folder
- **Placeholder Strategy**: No external dependencies - everything self-hosted

#### **Design Fidelity Focus**
- **Primary Goal**: 100% perfect visual replication of hotfix design
- **Advanced Effects**: Include ALL complex CSS (glassmorphism, shimmer, multi-layer gradients)
- **Performance**: Secondary to visual accuracy during migration phases
- **Progressive Enhancement**: Add optimizations after design fidelity achieved

#### **Package Dependencies Strategy**
- **Install As Needed**: Add packages when required for specific phase implementation
- **Required Packages**: `embla-carousel-react`, `embla-carousel-autoplay`, `resend`
- **Installation Timing**: Phase 6 (carousel), Phase 7 (form server actions)

#### **Content Strategy**
- **Historical Timeline**: Hardcode carousel content for immediate design fidelity
- **CMS Integration**: Plan for future conversion but prioritize visual accuracy
- **Wedding Data**: Use real wedding information from migration-images metadata

---

## 🌿 Git Workflow Strategy

### Branch Naming Convention
```bash
feat/design-system-foundation    # Phase 1
feat/navbar-migration           # Phase 2  
feat/hero-migration            # Phase 3
feat/alternating-blocks-migration  # Phase 4
feat/gallery-migration         # Phase 5
feat/social-proof-migration    # Phase 6
feat/testimonials-migration    # Phase 7
feat/carousel-migration        # Phase 8
feat/form-migration           # Phase 9
feat/map-migration            # Phase 10
feat/home-page-integration    # Final
```

### Phase Workflow Template
**For each phase, follow this exact workflow:**

#### 1. Start New Feature Branch
```bash
# Ensure you're on main and up to date
git checkout main
git pull origin main

# Create new feature branch for the phase
git checkout -b feat/[phase-name]-migration

# Verify clean working directory
git status
```

#### 2. Implementation Work
```bash
# Work on the phase implementation
# Follow the detailed phase checklist
# Test thoroughly on local development

# Commit work incrementally
git add .
git commit -m "feat: implement [component] structure"
git commit -m "feat: add [specific-feature] functionality"
git commit -m "feat: complete [phase-name] styling and animations"
```

#### 3. Pre-Merge Validation
```bash
# Build and test
pnpm build
pnpm lint
pnpm type-check  # if available

# Test in multiple browsers
# Verify mobile responsiveness
# Check accessibility with tools

# Final commit
git add .
git commit -m "feat: complete [phase-name] migration with full fidelity"
```

#### 4. Design Fidelity Checkpoint
**MANDATORY STOP POINT - Do not proceed until verified:**
- [ ] **Visual Comparison**: Side-by-side with original design
- [ ] **Interactive Elements**: All hover/click behaviors working
- [ ] **Responsive Design**: Perfect on mobile, tablet, desktop
- [ ] **Performance Check**: No significant slowdown
- [ ] **Cross-browser Test**: Chrome, Firefox, Safari
- [ ] **Accessibility Test**: Screen reader compatibility

#### 5. Merge to Main
```bash
# Push feature branch
git push origin feat/[phase-name]-migration

# Switch to main and merge
git checkout main
git merge feat/[phase-name]-migration

# Push updated main
git push origin main

# Clean up feature branch (optional)
git branch -d feat/[phase-name]-migration
git push origin --delete feat/[phase-name]-migration
```

#### 6. Phase Completion Documentation
```bash
# Update roadmap progress
# Document any deviations or notes
# Create checkpoint commit
git add .
git commit -m "checkpoint: complete Phase X - [phase-name] migration

✅ Design fidelity verified
✅ All interactive elements working  
✅ Responsive design confirmed
✅ Performance maintained
✅ Browser compatibility tested"
```

### Emergency Rollback Procedure
```bash
# If issues discovered after merge
git checkout main
git revert [commit-hash]
git push origin main

# Or reset to previous stable state
git reset --hard [previous-stable-commit]
git push origin main --force-with-lease
```

---

## 🚀 Migration Phases

## Phase 1: Foundation Setup
**Branch**: `feat/design-system-foundation`

### 📦 Design Tokens Integration
- [ ] **Install Design Tokens**
  - [ ] Copy `/shared-assets/styles/design-tokens.css` to project
  - [ ] Import in main CSS file or layout
  - [ ] Verify CSS custom properties are available
  - [ ] Test token usage: `var(--color-warm-walnut)`

- [ ] **Animation System**
  - [ ] Copy `/shared-assets/styles/animations.css` to project
  - [ ] Test keyframe animations work
  - [ ] Verify hardware acceleration settings
  - [ ] Check reduced motion preferences

- [ ] **Typography Setup**
  - [ ] Ensure Google Fonts loading: Dancing Script, Playfair Display, Montserrat
  - [ ] Test font rendering across browsers
  - [ ] Verify font weight variants

### ✅ Phase 1 Completion Criteria
- [ ] All design tokens accessible via CSS custom properties
- [ ] Font families rendering correctly
- [ ] Animation system functional
- [ ] No build errors or warnings
- [ ] Design tokens documentation reviewed

### 🚦 Phase 1 Merge Checkpoint
**STOP - Do not proceed to Phase 2 until verified:**
- [ ] **Design Fidelity Check**: Foundation tokens match original color palette exactly
- [ ] **Build Verification**: `pnpm build` completes successfully
- [ ] **Git Status**: All changes committed to `feat/design-system-foundation`
- [ ] **Branch Merge**: Feature branch merged to `main` and pushed
- [ ] **Documentation**: Phase 1 marked complete in roadmap

**Git Commands:**
```bash
git checkout main
git merge feat/design-system-foundation
git push origin main
git tag "phase-1-complete"
```

---

## Phase 2: Navigation Implementation  
**Branch**: `feat/navbar-migration`
**Base**: `/home-page-migration/00-navbar/`

### 📋 Required Files
- **📚 Read First**: `00-navbar/docs/README.md`
- **📝 Component**: `00-navbar/code/navbar-component.tsx`  
- **🎨 Styles**: `00-navbar/styles/navbar-styles.css`

### 📦 Navbar Component Migration
- [ ] **Component Setup**
  - [ ] Copy `00-navbar/code/navbar-component.tsx` → `components/navigation/Navbar.tsx`
  - [ ] Implement scroll detection hook (already included)
  - [ ] Add mobile menu state management (already included)
  - [ ] Extract styles from `00-navbar/styles/navbar-styles.css`

- [ ] **Transparent-to-White Effect**
  - [ ] Test scroll position detection (50px threshold)
  - [ ] Verify transparent initial state over hero
  - [ ] Confirm white background with backdrop blur on scroll
  - [ ] Check text color transitions (white → walnut brown)

- [ ] **Mobile Menu Overlay**
  - [ ] Implement full-screen mobile overlay
  - [ ] Test hamburger menu toggle
  - [ ] Verify backdrop blur effects
  - [ ] Test click-outside-to-close

- [ ] **Interactive Elements**
  - [ ] Logo gradient background effect
  - [ ] Navigation link hover underlines
  - [ ] CTA button styling and hover states
  - [ ] Responsive breakpoint behavior (900px)

### ✅ Phase 2 Completion Criteria
- [ ] Navbar renders correctly on all viewport sizes
- [ ] Scroll effect transitions smoothly
- [ ] Mobile menu functions properly
- [ ] All hover animations working
- [ ] Typography matches design exactly
- [ ] Z-index layering correct (navbar above hero)

### 🚦 Phase 2 Merge Checkpoint
**STOP - Do not proceed to Phase 3 until verified:**
- [ ] **Design Fidelity Check**: Navbar behavior identical to hotfix implementation
- [ ] **Scroll Testing**: Transparent to white transition works at 50px scroll
- [ ] **Mobile Testing**: Hamburger menu and overlay function perfectly
- [ ] **Cross-browser**: Tested in Chrome, Firefox, Safari
- [ ] **Git Status**: All changes committed to `feat/navbar-migration`
- [ ] **Branch Merge**: Feature branch merged to `main` and pushed

**Git Commands:**
```bash
git checkout main
git merge feat/navbar-migration
git push origin main
git tag "phase-2-complete"
```

---

## Phase 3: Hero Section Implementation
**Branch**: `feat/hero-migration`  
**Base**: `/home-page-migration/01-hero-section/`

### 📋 Required Files
- **📚 Read First**: `01-hero-section/docs/README.md`
- **📝 Component**: `01-hero-section/code/hero-section.tsx`
- **🎨 Styles**: `01-hero-section/styles/hero-styles.css`
- **🖼️ Background**: `01-hero-section/images/barn-exterior-full-deck-view-evening.jpg`

### 📦 Hero Component Migration
- [ ] **Hero Structure**
  - [ ] Copy `01-hero-section/code/hero-section.tsx` → `components/hero/HeroSection.tsx`
  - [ ] Copy background image to `public/images/venue/`
  - [ ] Extract styles from `01-hero-section/styles/hero-styles.css`
  - [ ] Verify design token usage (colors, typography)

- [ ] **Background System**
  - [ ] Implement fixed background attachment
  - [ ] Add gradient overlay system (3-layer)
  - [ ] Test background image positioning
  - [ ] Verify parallax effect (CSS-only)

- [ ] **Content Animation**
  - [ ] Implement `hotfixFadeInUp` animation (1.2s)
  - [ ] Add staggered content entrance
  - [ ] Test script accent fade-in
  - [ ] Verify button animations

- [ ] **Scroll Indicator**
  - [ ] Add bounce animation (2s infinite)
  - [ ] Position absolutely at bottom
  - [ ] Test scroll behavior
  - [ ] Ensure fade-in timing (1.8s delay)

- [ ] **Button System**
  - [ ] Implement romantic button styles
  - [ ] Add shimmer hover effects
  - [ ] Test transform animations
  - [ ] Verify focus states for accessibility

### ✅ Phase 3 Completion Criteria
- [ ] Hero displays at full viewport height
- [ ] Background image loads and positions correctly
- [ ] All entrance animations trigger properly
- [ ] Scroll indicator bounces correctly
- [ ] Button interactions feel smooth
- [ ] Typography hierarchy matches exactly
- [ ] Responsive behavior works on mobile

**Design Fidelity Check**: ✅ Hero section visually identical to original, all animations working

---

## Phase 4: Alternating Blocks Implementation
**Branch**: `feat/alternating-blocks-migration`
**Base**: `/home-page-migration/02-alternating-blocks/`

### 📦 Alternating Blocks Migration
- [ ] **Component Structure**
  - [ ] Create `components/sections/AlternatingBlocks.tsx`
  - [ ] Implement two-column alternating layout
  - [ ] Add gradient background system
  - [ ] Copy styles from migration package

- [ ] **Content System**
  - [ ] Implement venue feature data structure
  - [ ] Add numbered block indicators
  - [ ] Create image hover transforms
  - [ ] Test content alternation (left/right)

- [ ] **Interactive Effects**
  - [ ] Image hover scale (1.02) with enhanced shadows
  - [ ] Text content fade animations
  - [ ] Test numbered indicator styling
  - [ ] Verify responsive stacking behavior

### ✅ Phase 4 Completion Criteria
- [ ] Two-column layout alternates correctly
- [ ] Gradient background matches original
- [ ] Image hover effects smooth
- [ ] Content hierarchy preserved
- [ ] Mobile stacking works properly
- [ ] All spacing matches design

**Design Fidelity Check**: ✅ Layout, colors, and interactions match hotfix design

---

## Phase 5: Love Stories Gallery Implementation
**Branch**: `feat/gallery-migration`
**Base**: `/home-page-migration/03-love-stories-gallery/`

### 📦 Gallery Component Migration
- [ ] **Gallery Grid System**
  - [ ] Create `components/gallery/LoveStoriesGallery.tsx`
  - [ ] Implement 4-column CSS Grid
  - [ ] Add masonry-style positioning (1st and 6th span 2 columns)
  - [ ] Copy gallery styles from migration package

- [ ] **Glassmorphism Cards**
  - [ ] Implement card hover transforms (translateY(-8px))
  - [ ] Add image scale effects (1.1x on hover)
  - [ ] Create glassmorphic overlay system
  - [ ] Test backdrop blur effects

- [ ] **Shimmer Animation**
  - [ ] Implement left-to-right shimmer sweep
  - [ ] Test animation timing (0.8s ease-in-out)
  - [ ] Verify shimmer on hover only
  - [ ] Check z-index layering

- [ ] **Wedding Data Structure**
  - [ ] Create TypeScript interfaces for wedding data
  - [ ] Implement gallery metadata overlay
  - [ ] Test couple names, season, photo count
  - [ ] Verify link structure to detail pages

### ✅ Phase 5 Completion Criteria
- [ ] Grid layout displays correctly on all screen sizes
- [ ] Card hover effects smooth and performant
- [ ] Shimmer animations trigger properly
- [ ] Text overlays readable with proper contrast
- [ ] Mobile responsive grid works
- [ ] All images load and display properly

**Design Fidelity Check**: ✅ Gallery layout, effects, and typography exactly match original

---

## Phase 6: Brand Social Proof Implementation
**Branch**: `feat/social-proof-migration`
**Base**: `/home-page-migration/04-brand-social-proof/`

### 📦 Social Proof Migration
- [ ] **Quote Section**
  - [ ] Create `components/testimonials/BrandSocialProof.tsx`
  - [ ] Implement gradient background with star pattern
  - [ ] Add bevel edge effects (top and bottom)
  - [ ] Copy complex CSS from migration package

- [ ] **Visual Effects**
  - [ ] Implement SVG star pattern background
  - [ ] Add rounded bevel divider effects
  - [ ] Test backdrop filter blur (4px)
  - [ ] Verify multiple box-shadow layers

- [ ] **Typography Treatment**
  - [ ] Implement highlight text effects
  - [ ] Add brand logo hover animations
  - [ ] Test text shadow and glow effects
  - [ ] Verify script font integration

### ✅ Phase 6 Completion Criteria
- [ ] Complex background gradients render correctly
- [ ] Star pattern overlay visible
- [ ] Bevel effects display properly
- [ ] All text effects working
- [ ] Hover animations smooth
- [ ] Mobile layout preserved

**Design Fidelity Check**: ✅ Complex visual effects identical to original design

---

## Phase 7: Testimonials Section Implementation
**Branch**: `feat/testimonials-migration`
**Base**: `/home-page-migration/05-testimonials/`

### 📦 Testimonials Migration
- [ ] **Testimonial Grid**
  - [ ] Create `components/testimonials/TestimonialsSection.tsx`
  - [ ] Implement auto-fit grid (minmax(350px, 1fr))
  - [ ] Add glassmorphic card styling
  - [ ] Copy testimonial styles from migration package

- [ ] **Card Interactions**
  - [ ] Implement card hover lift effects
  - [ ] Add underline width animations
  - [ ] Create avatar overlay effects
  - [ ] Test all hover state transitions

- [ ] **Content System**
  - [ ] Create testimonial data structure
  - [ ] Implement star rating system
  - [ ] Add couple avatar handling
  - [ ] Test content overflow handling

### ✅ Phase 7 Completion Criteria
- [ ] Grid layout responsive and functional
- [ ] Card hover effects smooth
- [ ] Star ratings display correctly
- [ ] Avatar images load properly
- [ ] Typography hierarchy preserved
- [ ] Mobile layout works well

**Design Fidelity Check**: ✅ Testimonial cards match original styling and behavior

---

## Phase 8: History Carousel Implementation
**Branch**: `feat/carousel-migration`
**Base**: `/home-page-migration/06-history-carousel/`

### 📦 Carousel Component Migration
- [ ] **Embla Carousel Setup**
  - [ ] Install: `pnpm add embla-carousel-react embla-carousel-autoplay`
  - [ ] Create `components/carousel/HistoryCarousel.tsx`
  - [ ] Implement Embla carousel configuration
  - [ ] Copy carousel styles from migration package

- [ ] **Navigation System**
  - [ ] Add previous/next arrow controls
  - [ ] Implement indicator dots
  - [ ] Add autoplay with play/pause toggle
  - [ ] Test touch/drag navigation

- [ ] **Card Design**
  - [ ] Implement photo card hover effects
  - [ ] Add image scale animations (1.05x)
  - [ ] Create card lift animations
  - [ ] Test glassmorphic navigation buttons

- [ ] **Historical Content**
  - [ ] Integrate historical timeline data
  - [ ] Test year, title, description display
  - [ ] Verify image loading and optimization
  - [ ] Check content overflow handling

### ✅ Phase 8 Completion Criteria
- [ ] Carousel navigation works smoothly
- [ ] Autoplay functions correctly
- [ ] Card animations smooth and performant
- [ ] Touch/drag gestures responsive
- [ ] Navigation buttons styled correctly
- [ ] Content displays properly on all devices

**Design Fidelity Check**: ✅ Carousel behavior and styling identical to original

---

## Phase 9: Schedule Form Implementation
**Branch**: `feat/form-migration`
**Base**: `/home-page-migration/07-schedule-form/`

### 📦 Form Component Migration
- [ ] **Server Actions Setup**
  - [ ] Install: `pnpm add resend` (if not present)
  - [ ] Create `app/actions/schedule-tour.ts`
  - [ ] Implement Resend email integration
  - [ ] Set up environment variables

- [ ] **Form Component**
  - [ ] Create `components/forms/ScheduleForm.tsx`
  - [ ] Implement glassmorphic form container
  - [ ] Add rotating background animation
  - [ ] Copy form styles from migration package

- [ ] **Field System**
  - [ ] Implement form field components
  - [ ] Add focus state animations (gold glow)
  - [ ] Create field validation
  - [ ] Test two-column responsive grid

- [ ] **Submit Handling**
  - [ ] Implement form submission with Server Actions
  - [ ] Add loading states and feedback
  - [ ] Create thank-you page redirect
  - [ ] Test form validation and error handling

### ✅ Phase 9 Completion Criteria
- [ ] Form renders with correct glassmorphic styling
- [ ] Rotating background animation works
- [ ] All field focus states functioning
- [ ] Form submission works end-to-end
- [ ] Email delivery confirmed
- [ ] Validation errors display properly
- [ ] Mobile layout preserved

**Design Fidelity Check**: ✅ Form styling, animations, and functionality match original

---

## Phase 10: Map Section Implementation
**Branch**: `feat/map-migration`
**Base**: `/home-page-migration/08-map-section/`

### 📦 Map Component Migration
- [ ] **Split-Screen Layout**
  - [ ] Create `components/map/MapSection.tsx`
  - [ ] Implement 50/50 split-screen grid
  - [ ] Add location information panel
  - [ ] Copy map styles from migration package

- [ ] **Google Maps Integration**
  - [ ] Embed Google Maps iframe
  - [ ] Add gradient overlay effects
  - [ ] Implement floating action buttons
  - [ ] Test responsive map sizing

- [ ] **Location Data**
  - [ ] Create location information cards
  - [ ] Implement icon system with gradients
  - [ ] Add hover animations for cards
  - [ ] Test content hierarchy

- [ ] **Interactive Elements**
  - [ ] Add action button shimmer effects
  - [ ] Implement button hover transforms
  - [ ] Test external map links
  - [ ] Verify mobile stacking behavior

### ✅ Phase 10 Completion Criteria
- [ ] Split-screen layout works perfectly
- [ ] Google Maps loads and displays correctly
- [ ] Action buttons function and animate properly
- [ ] Location cards hover effects smooth
- [ ] Mobile layout stacks correctly
- [ ] All external links work

**Design Fidelity Check**: ✅ Map section layout and interactions identical to original

---

## 🏁 Final Integration Phase
**Branch**: `feat/home-page-integration`

### 📦 Complete Page Assembly
- [ ] **Page Integration**
  - [ ] Create main home page layout
  - [ ] Import all section components
  - [ ] Test complete page rendering
  - [ ] Verify section spacing and flow

- [ ] **Performance Optimization**
  - [ ] Implement image optimization
  - [ ] Add lazy loading where appropriate
  - [ ] Test page load performance
  - [ ] Verify Core Web Vitals

- [ ] **Cross-Browser Testing**
  - [ ] Test in Chrome, Firefox, Safari
  - [ ] Verify mobile device compatibility
  - [ ] Check tablet layout behavior
  - [ ] Test accessibility with screen readers

- [ ] **Final Validation**
  - [ ] Complete visual comparison with original
  - [ ] Test all interactive elements
  - [ ] Verify form submissions work
  - [ ] Check all external links

### ✅ Final Completion Criteria
- [ ] All sections render correctly in sequence
- [ ] Page performance meets standards
- [ ] All animations and interactions working
- [ ] Cross-browser compatibility confirmed
- [ ] Mobile responsiveness perfect
- [ ] Accessibility compliance verified

**Final Design Fidelity Check**: ✅ Complete home page identical to hotfix implementation

---

## 📊 Progress Tracking

### Migration Status Dashboard
```
Phase 1: Foundation Setup           [✅] Complete    [ ] In Progress  [ ] Not Started
Phase 2: Navigation                 [ ] Not Started  [ ] In Progress  [ ] Complete  
Phase 3: Hero Section              [ ] Not Started  [ ] In Progress  [ ] Complete
Phase 4: Alternating Blocks        [ ] Not Started  [ ] In Progress  [ ] Complete
Phase 5: Love Stories Gallery      [ ] Not Started  [ ] In Progress  [ ] Complete
Phase 6: Brand Social Proof        [ ] Not Started  [ ] In Progress  [ ] Complete
Phase 7: Testimonials              [ ] Not Started  [ ] In Progress  [ ] Complete
Phase 8: History Carousel          [ ] Not Started  [ ] In Progress  [ ] Complete
Phase 9: Schedule Form             [ ] Not Started  [ ] In Progress  [ ] Complete
Phase 10: Map Section             [ ] Not Started  [ ] In Progress  [ ] Complete
Final: Integration                 [ ] Not Started  [ ] In Progress  [ ] Complete
```

### 🔥 **CRITICAL IMPLEMENTATION NOTES**

#### **Phase Dependencies** 
- **Phase 6 (Carousel)**: Install `pnpm add embla-carousel-react embla-carousel-autoplay`
- **Phase 7 (Form)**: Requires `pnpm add resend` + `RESEND_API_KEY=re_P41xqx13_GvHvk7KnTwwjvkp1YDcJtzZK`
- **All Phases**: Replace Unsplash URLs with migration-images photos

#### **Asset Migration Checklist**
- [ ] Hero: `barn-exterior-full-deck-view-evening.jpg` → `/public/images/venue/`
- [ ] Alternating: venue interior/exterior photos → `/public/images/venue/`  
- [ ] Gallery: wedding photos → `/public/images/weddings/`
- [ ] Testimonials: couple portraits → `/public/images/testimonials/`
- [ ] Carousel: historical photos → `/public/images/historical/`

#### **External URL Replacements**
- [ ] Testimonial avatars: Unsplash → actual couple photos
- [ ] Gallery wedding photos: External URLs → local migration-images
- [ ] Carousel historical images: Unsplash → actual historical photos

### Quality Gates
Each phase must pass these gates before proceeding:
- ✅ **Visual Fidelity**: Pixel-perfect match to original
- ✅ **Functionality**: All interactions working correctly
- ✅ **Performance**: No significant performance regression
- ✅ **Accessibility**: WCAG 2.1 AA compliance
- ✅ **Responsive**: Works perfectly on all device sizes

---

## 🔧 Technical Requirements

### Dependencies to Install
```bash
# Core dependencies
pnpm add embla-carousel-react embla-carousel-autoplay
pnpm add resend

# Development dependencies (if needed)
pnpm add -D @types/node
```

### Environment Variables
```bash
# .env.local
RESEND_API_KEY=re_P41xqx13_GvHvk7KnTwwjvkp1YDcJtzZK
```

### File Structure
```
src/
├── components/
│   ├── navigation/
│   │   └── Navbar.tsx
│   ├── hero/
│   │   └── HeroSection.tsx
│   ├── sections/
│   │   └── AlternatingBlocks.tsx
│   ├── gallery/
│   │   └── LoveStoriesGallery.tsx
│   ├── testimonials/
│   │   ├── BrandSocialProof.tsx
│   │   └── TestimonialsSection.tsx
│   ├── carousel/
│   │   └── HistoryCarousel.tsx
│   ├── forms/
│   │   └── ScheduleForm.tsx
│   └── map/
│       └── MapSection.tsx
├── styles/
│   ├── design-tokens.css
│   └── animations.css
└── app/
    ├── actions/
    │   └── schedule-tour.ts
    └── page.tsx
```

---

## 🚨 Critical Success Factors

### Must-Have Outcomes
1. **Zero Visual Regression**: Every pixel must match the original
2. **Performance Maintained**: Page load times must not degrade
3. **Accessibility Enhanced**: Meet or exceed WCAG 2.1 AA standards
4. **Mobile Excellence**: Perfect mobile experience preserved
5. **Browser Compatibility**: Works across all modern browsers

### Risk Mitigation
- **Backup Strategy**: Keep original hotfix CSS as fallback
- **Testing Protocol**: Test each section thoroughly before merging
- **Performance Monitoring**: Use Lighthouse to track metrics
- **Documentation**: Maintain detailed notes on any deviations

### Success Metrics
- [ ] Visual comparison passes 100%
- [ ] Lighthouse Performance Score: 90+
- [ ] Lighthouse Accessibility Score: 100
- [ ] Core Web Vitals: All green
- [ ] Cross-browser compatibility: 100%

---

## 📞 Support & Resources

### Documentation File Map
```
📁 home-page-migration/
├── 📖 README.md                    ← Overview & getting started
├── 📖 MIGRATION_ROADMAP.md         ← This file (complete workflow)
├── 📁 shared-assets/docs/
│   ├── 📖 DESIGN-TOKENS.md         ← Color system & typography
│   └── 📖 ANIMATIONS.md            ← Interactive elements guide
├── 📁 00-navbar/docs/README.md     ← Phase 2: Navigation details
├── 📁 01-hero-section/docs/README.md ← Phase 3: Hero implementation
├── 📁 02-alternating-blocks/docs/README.md ← Phase 4: Feature blocks
├── 📁 03-love-stories-gallery/docs/README.md ← Phase 5: Gallery system
├── 📁 04-brand-social-proof/docs/README.md ← Phase 6: Visual effects
├── 📁 05-testimonials/docs/README.md ← Phase 7: Testimonial cards
├── 📁 06-history-carousel/docs/README.md ← Phase 8: Carousel setup
├── 📁 07-schedule-form/docs/README.md ← Phase 9: Form + Server Actions
└── 📁 08-map-section/docs/README.md ← Phase 10: Map integration
```

### File Usage Pattern
For each phase:
1. **Read** `[XX-section]/docs/README.md` for implementation details
2. **Copy** `[XX-section]/code/*.tsx` files to project
3. **Extract** styles from `[XX-section]/styles/*.css`
4. **Reference** shared documentation as needed

### Original Implementation Source
- **Hotfix CSS**: `/src/styles/hotfix-site.css` (lines vary by section)
- **Live Reference**: `http://localhost:7777/` (current implementation)
- **Color Values**: All documented in `shared-assets/docs/DESIGN-TOKENS.md`

### Quality Validation Resources
- **Design Comparison**: Side-by-side with `http://localhost:7777/`
- **Section Documentation**: Each README.md has feature checklists
- **Animation Reference**: `shared-assets/docs/ANIMATIONS.md` for all effects
- **Token Verification**: `shared-assets/docs/DESIGN-TOKENS.md` for colors

---

## 🔄 Complete Workflow Summary

### Per-Phase Workflow
**Each phase follows this exact 6-step process:**

1. **🌱 Start Feature Branch**
   ```bash
   git checkout main && git pull origin main
   git checkout -b feat/[phase-name]-migration
   ```

2. **⚡ Implement Phase**
   - Follow detailed phase checklist
   - Commit work incrementally
   - Test thoroughly in development

3. **✅ Validate Implementation**
   - Complete all phase completion criteria
   - Test across browsers and devices
   - Verify design fidelity

4. **🚦 Merge Checkpoint (MANDATORY STOP)**
   - Review merge checkpoint requirements
   - Do NOT proceed until all items checked
   - Side-by-side comparison with original

5. **🔀 Merge to Main**
   ```bash
   git checkout main
   git merge feat/[phase-name]-migration
   git push origin main
   git tag "phase-X-complete"
   ```

6. **📝 Document & Continue**
   - Update progress dashboard
   - Document any notes or deviations
   - Proceed to next phase

### Critical Success Points
- **11 Git Tags**: One for each phase completion
- **11 Merge Checkpoints**: Mandatory validation gates
- **Zero Regression Policy**: Each phase must maintain previous work
- **Design Fidelity**: 100% visual accuracy required at each step

### Emergency Procedures
```bash
# Rollback if issues found
git checkout main
git revert [problematic-commit]
git push origin main

# Or hard reset to previous stable tag
git reset --hard phase-X-complete
git push origin main --force-with-lease
```

This roadmap ensures systematic migration with validation at each step, maintaining perfect design fidelity throughout the process.