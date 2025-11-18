# Spiritual Tourism Website

## Overview

A production-ready website template for spiritual tourism and pilgrimage services, built with modern web technologies. The application provides a complete booking platform for religious tours and spiritual journeys across India, featuring tour packages, service listings, gallery showcases, and contact forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript for type safety and maintainable code.

**Routing**: Wouter - a lightweight routing library chosen for minimal bundle size while providing essential routing capabilities. Routes are defined in a central `App.tsx` file using a Switch/Route pattern.

**State Management**: TanStack Query (React Query) for server state management. The architecture follows a data-fetching pattern where custom hooks (`usePackages`, `useTestimonials`, `useServices`, `useGallery`) abstract API calls and provide caching, loading states, and error handling automatically.

**Styling**: Tailwind CSS utility-first approach with a custom design system defined in `tailwind.config.ts`. The application uses CSS variables for theming, allowing easy customization of colors and spacing. Shadcn/ui components provide accessible, pre-styled UI primitives.

**Form Handling**: React Hook Form with Zod schema validation. Forms use resolver pattern to integrate validation schemas directly with form state, providing real-time validation feedback.

**Component Structure**: Page components import reusable UI components (Header, Footer, specialized sections). Each page is self-contained with its own layout while sharing common elements. Component hierarchy follows atomic design principles with UI primitives in `/components/ui` and composed components at higher levels.

### Backend Architecture

**Server Framework**: Express.js with TypeScript, serving both API endpoints and static frontend assets in production.

**API Design**: RESTful endpoints following resource-based naming:
- `/api/packages` - Tour package listings
- `/api/packages/:id` - Individual package details
- `/api/testimonials` - Customer testimonials
- `/api/services` - Service offerings
- `/api/gallery` - Gallery images
- `/api/contact` - Contact form submissions

**Data Layer**: Currently uses in-memory storage (`MemStorage` class implementing `IStorage` interface) with Map data structures. This design allows easy migration to a database by implementing a new storage class with the same interface.

**Development Setup**: Vite dev server runs in middleware mode, providing HMR and fast rebuilds during development. Production builds serve pre-compiled static assets.

**Schema Validation**: Zod schemas defined in `shared/schema.ts` provide runtime type validation for API payloads and are shared between frontend and backend to ensure type consistency.

### Database & Schema Design

**ORM**: Drizzle ORM configured for PostgreSQL (see `drizzle.config.ts`). While currently using in-memory storage, the schema is defined and ready for database migration.

**Tables**:
- `users` - Authentication (username, password)
- `packages` - Tour packages with itinerary, highlights, pricing
- `testimonials` - Customer reviews with name, quote, image
- `gallery` - Image gallery with categories and locations
- `services` - Service offerings with icons and descriptions

**Type Safety**: Drizzle Zod integration generates TypeScript types from database schema, ensuring compile-time type checking and runtime validation consistency.

**Migration Strategy**: The `db:push` script synchronizes schema changes to the database. The architecture separates data access (storage interface) from business logic, making the eventual database integration seamless.

### Build & Deployment

**Build Process**: 
1. Frontend: Vite bundles React app with code splitting and optimization
2. Backend: esbuild bundles Express server as ESM module with external dependencies

**Production Server**: Single Node.js process serves both API and static frontend assets. The Express server serves the Vite-built frontend from `/dist/public` and handles API routes.

**Environment Configuration**: Uses `NODE_ENV` to toggle between development (Vite middleware) and production (static serving) modes.

## External Dependencies

### UI Component Library
- **Radix UI** - Headless, accessible component primitives (dialogs, dropdowns, accordions, etc.)
- **Shadcn/ui** - Pre-configured Radix components with Tailwind styling
- **Lucide React** - Icon library for consistent iconography

### Data Fetching & Forms
- **TanStack Query** - Server state management with automatic caching and refetching
- **React Hook Form** - Performant form state management with minimal re-renders
- **Zod** - Schema validation for forms and API data

### Database & ORM
- **Drizzle ORM** - Type-safe ORM with PostgreSQL dialect
- **@neondatabase/serverless** - Serverless PostgreSQL driver for Neon database
- **drizzle-zod** - Schema validation integration

### Styling & Utilities
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - Type-safe variant styling API
- **clsx** / **tailwind-merge** - Conditional class name utilities

### Development Tools
- **Vite** - Fast build tool with HMR
- **TypeScript** - Type safety across frontend and backend
- **ESBuild** - Fast bundler for production server

### Session & Storage
- **connect-pg-simple** - PostgreSQL session store for Express (configured but not actively used in current implementation)