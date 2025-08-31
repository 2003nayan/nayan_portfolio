# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` or `bun dev` - Start development server (prefer bun as indicated in README)
- `npm run build` or `bun build` - Build for production
- `npm start` or `bun start` - Start production server
- `npm run lint` or `bun lint` - Run ESLint
- `npm run format` or `bun format` - Format code with Prettier

### Package Management
This project uses bun as the preferred package manager (as shown in README setup instructions), though npm is also supported.

## Architecture Overview

This is a modern Next.js 14 portfolio application built with App Router architecture:

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS with custom animations
- **UI Components**: 
  - Shadcn/UI (Radix-based components)
  - Magic UI (custom animations and effects)
  - Acternity UI (lens effects, floating nav, spotlight)
- **State Management**: React hooks and local storage
- **Content**: MDX for blog posts, dynamic GitHub integration
- **Analytics**: Vercel Analytics and Speed Insights

### Key Structure
- **App Router**: `src/app/` contains all routes (page.tsx, layout.tsx, API routes)
- **Components**: Organized in `src/components/` with subfolders:
  - `ui/` - Shadcn/UI components
  - `magicui/` - Animation components (blur-fade, dock, marquee, etc.)
  - `acternityui/` - Interactive effects (lens, spotlight, vanish-input)
  - `icons/` - Custom SVG icon components
  - `cards/` - Reusable card components
- **Configuration**: Centralized in `src/data/config/`:
  - `site.config.tsx` - Main site data and metadata
  - `projects.config.tsx` - Project showcase data
  - `clients.config.tsx` - Client work data
  - `skills.config.ts` - Skills and technologies
  - `nav.config.tsx` - Navigation configuration

### Data Flow
- Site configuration is centralized in `src/data/config/site.config.tsx` (exported as `DATA`)
- Blog posts are fetched via API route `/api/blogs` 
- GitHub stats integration through `/api/gh-stats` and octokit
- Dynamic content loading with SWR for data fetching

### Styling Approach
- Uses TailwindCSS with custom configuration
- Dark/light theme support via next-themes
- Custom animations with framer-motion
- Responsive design with mobile-first approach
- Custom components use class-variance-authority for variant management

### Environment Variables
Set up `.env.local` with GitHub token and other API keys as shown in the README.

### Content Management
- Blog posts: MDX files with frontmatter metadata
- Projects: Configured in TypeScript config files
- Images: Stored in `public/` and `src/assets/images/`

## Important Notes

- This portfolio showcases both personal projects and client work via tab navigation
- Uses custom font (Inter) loaded via next/font/google  
- Implements smooth scroll animations with BlurFade components
- Contact form uses toast notifications (sonner)
- Resume download functionality built-in
- GitHub integration for displaying contribution stats