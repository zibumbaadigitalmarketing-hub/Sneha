# Spiritual Tourism Website Template

A complete, production-ready website template for spiritual tourism and pilgrimage services, inspired by modern travel agency design patterns. Built with React, TypeScript, Tailwind CSS, and Express.

## Features

### Pages
- **Home** - Hero slider, introduction section, services grid, packages preview, testimonials, gallery preview, and contact CTA
- **About** - Company information, core values, statistics, and team details
- **Services** - Detailed service offerings with icons and descriptions
- **Packages** - Grid of tour packages with filtering and detail views
- **Package Detail** - Comprehensive package information with itinerary, highlights, and booking CTA
- **Gallery** - Responsive image grid with category filtering and lightbox
- **Contact** - Contact form with validation, office locations, and contact information
- **404** - Custom error page with navigation options

### Components
- **Responsive Header** - Logo, navigation menu, and mobile hamburger toggle
- **Hero Slider** - Auto-playing carousel with smooth transitions and navigation
- **Services Grid** - Icon-based service cards with hover effects
- **Packages Carousel** - Scrollable package cards with pagination
- **Testimonials Slider** - Auto-rotating customer reviews
- **Gallery Grid** - Responsive masonry-style layout with lightbox
- **Contact Form** - Validated form with backend integration
- **Footer** - Multi-column layout with addresses, quick links, and gallery thumbnails

### Technical Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ SEO-optimized with meta tags and Open Graph
- ✅ Accessible (ARIA labels, semantic HTML, keyboard navigation)
- ✅ Form validation with Zod schema
- ✅ Smooth animations and transitions
- ✅ TypeScript for type safety
- ✅ Backend API with Express
- ✅ In-memory data storage (easily replaceable with database)

## Tech Stack

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Wouter** - Lightweight routing
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **TanStack Query** - Data fetching
- **Shadcn/ui** - Component library
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5000`

The application will automatically restart when you make changes to the code.

## Project Structure

```
├── client/                  # Frontend application
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── ui/        # Shadcn UI components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSlider.tsx
│   │   │   └── ...
│   │   ├── pages/         # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   └── ...
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities
│   │   ├── App.tsx        # Root component with routing
│   │   ├── index.css      # Global styles
│   │   └── main.tsx       # Entry point
│   └── index.html         # HTML template
├── server/                 # Backend application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage layer
│   └── vite.ts            # Vite dev server
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Zod schemas and TypeScript types
├── design_guidelines.md   # Design system documentation
├── tailwind.config.ts     # Tailwind configuration
└── README.md             # This file
```

## API Endpoints

### GET /api/packages
Get all tour packages
```json
[
  {
    "id": "uuid",
    "title": "Kashi Allahabad Ayodhya Yatra",
    "duration": "3N/4D",
    "description": "...",
    "itinerary": ["...", "..."],
    "highlights": ["...", "..."],
    "price": 15000
  }
]
```

### GET /api/packages/:id
Get a specific package by ID

### GET /api/testimonials
Get all customer testimonials

### GET /api/services
Get all services

### GET /api/gallery
Get all gallery items

### POST /api/contact
Submit contact form
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 1234567890",
  "message": "I'm interested in...",
  "package": "Kashi Yatra (1N/2D)"
}
```

## Customization

### Branding

1. **Logo**: Replace the placeholder logo in `Header.tsx` and `Footer.tsx`
2. **Colors**: Modify color tokens in `client/src/index.css`:
   - `--primary`: Main brand color (currently orange/saffron)
   - `--secondary`, `--accent`, etc.
3. **Typography**: Change fonts in `tailwind.config.ts`

### Content

1. **Packages**: Edit seed data in `server/storage.ts` or connect to a database
2. **Services**: Update service list in `server/storage.ts`
3. **Testimonials**: Add/modify testimonials in `server/storage.ts`
4. **Contact Info**: Update addresses and phone numbers in `Footer.tsx` and `Contact.tsx`

### Images

Replace placeholder images with actual photos:
1. Add images to `client/public/` or use a CDN
2. Update image paths in components and seed data
3. For hero images: 1920x1080px minimum
4. For package cards: 800x600px recommended
5. For gallery: Mix of landscape (800x600) and portrait (600x800)

### Database Integration

To replace in-memory storage with a database:

1. **Install database dependencies:**
   ```bash
   npm install drizzle-orm @neondatabase/serverless
   ```

2. **Update `server/storage.ts`:**
   - Replace `MemStorage` class with database queries
   - Use Drizzle ORM with PostgreSQL schema from `shared/schema.ts`

3. **Set environment variables:**
   ```
   DATABASE_URL=your_database_connection_string
   ```

## Deployment

### Replit Deployment
This project is optimized for Replit deployment:
1. Push your code to a Replit project
2. Click "Deploy" in the Replit interface
3. Your app will be live at `your-repl.replit.app`

### Other Platforms

**Vercel / Netlify:**
```bash
npm run build
# Deploy the dist/ folder
```

**Docker:**
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

**Environment Variables:**
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `DATABASE_URL` - Database connection (if using database)

## SEO Optimization

Each page includes:
- Unique, descriptive title tags
- Meta descriptions
- Open Graph tags for social sharing
- Semantic HTML structure
- Alt text for images
- Proper heading hierarchy

Update meta tags in `client/index.html` and individual page components.

## Accessibility

The template follows WCAG 2.1 guidelines:
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Sufficient color contrast
- Responsive text sizing
- Screen reader friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lazy loading for images
- Code splitting by route
- Optimized bundle size
- CSS optimizations with Tailwind
- Fast page transitions

## License

This template is provided as-is for use in your projects. Feel free to customize and deploy as needed.

## Support

For questions or issues:
1. Check the design guidelines in `design_guidelines.md`
2. Review component source code in `client/src/components/`
3. Examine API routes in `server/routes.ts`

## Credits

Built with modern web technologies and inspired by leading travel agency designs.
