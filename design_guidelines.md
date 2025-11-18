# Design Guidelines: Spiritual Tourism Website (Gokashi.in Style)

## Design Approach

**Reference-Based Approach**: Drawing inspiration from spiritual travel platforms like Booking.com's structure combined with Indian cultural aesthetics and modern hospitality design patterns (Airbnb's card systems, travel agency layouts).

**Core Principles**:
- Warm, welcoming spiritual atmosphere with clean, trustworthy presentation
- Balance traditional Indian cultural elements with modern web design
- Content-rich layout showcasing destinations, packages, and social proof
- Clear call-to-action hierarchy for bookings and inquiries

---

## Typography

**Font Families**: 
- Primary: Poppins (headers, navigation, CTAs) - modern, clean, highly readable
- Secondary: Inter or Open Sans (body text, descriptions)

**Hierarchy**:
- Hero Headlines: Bold, 3xl to 5xl (responsive), line-height tight (1.1)
- Section Titles: Semibold, 2xl to 3xl, line-height snug (1.25)
- Subtitles/Labels: Medium, sm to base, uppercase with letter-spacing
- Body Text: Regular, base (16px), line-height relaxed (1.75)
- CTAs: Medium to semibold, base to lg

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24 (mobile to desktop)
- Card spacing: p-6 to p-8
- Grid gaps: gap-6 to gap-8
- Container max-width: max-w-7xl with px-4 to px-8

**Grid Patterns**:
- Services/Features: 3-column grid (lg), 2-column (md), 1-column (mobile)
- Package cards: 3-4 columns (lg), 2 columns (md), 1 column (mobile)
- Gallery: 4-column masonry grid (lg), 3-column (md), 2-column (mobile)
- Testimonials: Single card carousel with navigation arrows

---

## Component Library

### Header/Navigation
- Sticky header with logo (left), navigation links (center), CTA button (right)
- Mobile: Hamburger menu with slide-in overlay
- Height: h-20, with shadow on scroll

### Hero Slider
- Full-width auto-playing carousel (5-7 slides, 5s intervals)
- Each slide: Large background image with overlay, centered text, CTA button
- Navigation: Dot indicators (bottom center), arrow controls (sides)
- Height: 80vh (desktop), 60vh (mobile)

### Service Cards
- Icon at top (64x64px placeholder area)
- Title below icon
- Short description (2-3 lines)
- Subtle hover lift effect (translateY)
- Card background with padding p-6

### Package Cards
- Vertical card layout with image on top (16:9 ratio)
- Title, duration badge overlay on image
- "Contact Us" or "View Details" CTA button
- Hover: Slight scale and shadow increase

### Gallery Grid
- Responsive masonry/grid layout
- Lightbox overlay on click (full-screen modal with close button)
- Image aspect ratio: Mix of landscape and portrait

### Testimonial Cards
- Quote icon at top-left
- Review text (3-4 lines max)
- Customer photo (circular, 64px) with name below
- Card with subtle border or shadow

### Footer
- Multi-column layout: Addresses (2 locations), Quick Links, Gallery Thumbnails
- Contact details with icons (phone, email, location)
- Small gallery grid (3x3 thumbnails)
- Copyright bar at bottom

### Contact Form
- Fields: Name, Email, Phone, Message (textarea), Package Dropdown
- Validation: Required field indicators, inline error messages
- Submit button: Full-width on mobile, auto-width on desktop

---

## Images Strategy

**Hero Slider Images**:
- Large, high-quality landscape photos of temples, spiritual sites, pilgrimage destinations
- 1920x1080px minimum, with content safe area in center
- Overlay gradient for text readability
- Placeholders: Temple architecture, ghats, religious ceremonies, scenic landscapes

**Package Card Images**:
- 800x600px thumbnails of destinations
- Consistent aspect ratio (4:3 or 16:9)
- Show iconic landmarks or temple exteriors

**Gallery Section**:
- Mix of portrait and landscape orientations
- Temple architecture, devotees, cultural moments, scenic locations
- 600x800px (portrait), 800x600px (landscape)

**Testimonial Avatars**:
- Circular placeholder images (generic user icons acceptable)
- 128x128px

**Footer Gallery Thumbnails**:
- Small 100x100px squares
- Quick previews of destinations

---

## Interactions & Animations

**Minimal, Purposeful Animations**:
- Hero slider: Smooth fade transitions (500ms)
- Card hovers: Subtle lift (translateY -4px, 200ms ease)
- Mobile menu: Slide-in from right (300ms)
- Lightbox: Fade-in overlay with scale animation
- Scroll-based: Sticky header shadow on scroll
- NO parallax, NO excessive scroll animations

**Form Interactions**:
- Input focus: Border highlight, smooth transition
- Validation: Shake animation for errors
- Submit: Loading spinner on button

---

## Page-Specific Guidelines

**Home Page Flow**:
1. Hero slider with spiritual CTAs
2. Introduction section with 2-column layout (text + stats)
3. Services grid (5 services with icons)
4. Packages preview carousel (8-10 packages)
5. Testimonials slider (3-4 reviews)
6. Gallery preview grid (12 images)
7. Contact CTA section with phone number
8. Full footer

**Packages Page**:
- Hero banner with page title
- Grid of package cards with filters/sorting
- Each card links to detail template

**Package Detail Template**:
- Hero image of destination
- Title, duration, overview
- Itinerary section (day-by-day breakdown)
- Highlights list with checkmarks
- Booking CTA (sticky on mobile)
- Related packages carousel

**Gallery Page**:
- No hero, direct to grid
- Filterable by destination (optional category tabs)
- Lightbox with prev/next navigation

**404 Page**:
- Centered content with illustration
- "Return Home" CTA button
- Simplified header/footer

---

**Accessibility Notes**:
- All images require descriptive alt text
- Form labels properly associated with inputs
- ARIA labels for slider controls and navigation
- Keyboard navigation for modals and menus
- Focus visible states on interactive elements