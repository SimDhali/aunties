# Overview

This is a full-stack web application for "Auntie's Sauces" - an Indian-inspired condiment e-commerce website. The project features a modern React frontend with a Node.js/Express backend, showcasing authentic Indian sauce products with a vibrant, colorful design. The application includes product displays, recipe sharing, store locator functionality, and newsletter subscription features.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built with React and TypeScript, using modern tooling and component patterns:

- **Build System**: Vite for fast development and optimized production builds
- **UI Framework**: React with TypeScript for type safety
- **Component Library**: Radix UI primitives with custom shadcn/ui components for consistent, accessible design
- **Styling**: Tailwind CSS with custom color scheme and design tokens
- **State Management**: TanStack Query for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe forms

## Backend Architecture
The backend follows a RESTful API design with Express.js:

- **Server Framework**: Express.js with TypeScript for type safety
- **API Design**: RESTful endpoints for products, recipes, newsletter subscriptions, and store locations
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development
- **Middleware**: Custom logging, error handling, and request parsing
- **Development Setup**: Hot reloading with Vite integration in development mode

## Data Storage Solutions
The application uses a flexible storage architecture:

- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Management**: Centralized schema definitions with Zod validation
- **Migration System**: Drizzle Kit for database migrations and schema management
- **Development Storage**: In-memory storage implementation for rapid development and testing
- **Production Ready**: Configured for Neon Database (PostgreSQL) in production

## Design System
The application implements a comprehensive design system:

- **Color Palette**: Custom brand colors including lime, turquoise, bright yellow, navy, and mint
- **Typography**: Inter font family with multiple weights
- **Components**: Reusable UI components with consistent styling and behavior
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Animations**: CSS transitions and transforms for enhanced user experience

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **Drizzle ORM**: Type-safe ORM for database operations and schema management

## UI and Design Libraries
- **Radix UI**: Headless UI components for accessibility and consistent behavior
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel component for product showcases

## Development and Build Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking for both frontend and backend
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration

## Third-Party Services
- **Google Fonts**: Web fonts (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Unsplash**: Stock photography for product and recipe images
- **Replit Integration**: Development environment integration and deployment support

## Validation and Forms
- **Zod**: Runtime type validation and schema definition
- **React Hook Form**: Performant forms with easy validation
- **Hookform Resolvers**: Integration between React Hook Form and Zod

## Utility Libraries
- **Date-fns**: Date manipulation and formatting
- **Class Variance Authority**: Type-safe CSS class composition
- **CLSX**: Conditional class name utility
- **Nanoid**: Unique ID generation