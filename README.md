# Portfolio - Modern Developer Portfolio

A modern, minimalist developer portfolio built with **Next.js 14** and **App Router**, featuring smooth animations, dynamic content, and a clean design aesthetic.

## ✨ Features

- **🎨 Modern UI**: Built with TailwindCSS, Shadcn/UI, Magic UI, and Acternity UI components
- **📱 Responsive Design**: Seamless experience across desktop, tablet, and mobile devices  
- **🎭 Interactive Animations**: Smooth transitions using Framer Motion and custom blur-fade effects
- **📝 Dynamic Blog System**: MDX-powered blog with API routes and auto-generated metadata
- **📊 GitHub Integration**: Live GitHub stats display via Octokit API integration
- **🌓 Theme Support**: Dark/light theme switching with next-themes
- **🔧 Project Showcase**: Tabbed interface for personal projects and client work
- **📧 Contact Integration**: Interactive contact forms with toast notifications
- **⚡ Performance Optimized**: Built-in Vercel Analytics and Speed Insights
- **🎯 SEO Optimized**: Auto-generated sitemaps, robots.txt, and comprehensive metadata

## 🛠️ Tech Stack

### Core Framework
- **Next.js 14** - React framework with App Router
- **React 18** - JavaScript library for building user interfaces  
- **TypeScript** - Type-safe JavaScript

### Styling & UI
- **TailwindCSS** - Utility-first CSS framework
- **Shadcn/UI** - Modern component library built on Radix UI
- **Magic UI** - Custom animation components (blur-fade, marquee, dock)
- **Acternity UI** - Interactive effects (lens, spotlight, floating nav)
- **Framer Motion** - Animation library for smooth interactions

### Data & APIs
- **MDX** - Markdown with JSX for blog content
- **Octokit** - GitHub API integration for stats
- **SWR** - Data fetching with caching
- **Gray Matter** - Frontmatter parser for blog posts

### Developer Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting  
- **Sharp** - Image optimization
- **Bun** - Fast package manager and runtime

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page with timeline and education
│   ├── blog/              # Blog listing and individual posts
│   ├── projects/          # Project showcase with tabs
│   └── api/               # API routes (blog, GitHub stats)
├── components/            # Reusable UI components
│   ├── ui/                # Shadcn/UI components
│   ├── magicui/           # Custom animation components
│   ├── acternityui/       # Interactive effect components
│   ├── icons/             # Custom SVG icon components
│   └── cards/             # Specialized card components
├── data/
│   └── config/            # Centralized configuration files
│       ├── site.config.tsx    # Main site metadata and content
│       ├── projects.config.tsx # Project showcase data
│       ├── clients.config.tsx  # Client work data
│       └── work.config.tsx     # Professional experience
└── lib/                   # Utility functions and API clients
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/2003nayan/portfolio
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Add your GitHub token and other API keys to `.env.local`

4. **Start the development server**
   ```bash
   bun dev
   # or npm run dev
   ```

5. **Customize your content**
   - Edit `src/data/config/site.config.tsx` for personal information
   - Update project data in `src/data/config/projects.config.tsx`
   - Add your work experience in `src/data/config/work.config.tsx`
   - Replace images in the `public/` directory

## 📜 Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production  
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun format` - Format code with Prettier

## 🎯 Key Pages

- **Home** (`/`) - Hero section, skills, featured projects, and contact form
- **About** (`/about`) - Detailed bio, education, work timeline
- **Projects** (`/projects`) - Complete project showcase with personal/client tabs  
- **Blog** (`/blog`) - Article listing with featured posts on homepage
- **Individual Blog Posts** (`/blog/[slug]`) - MDX-rendered blog content

## 🔧 Customization

The portfolio is designed to be easily customizable:

1. **Personal Information**: Update `src/data/config/site.config.tsx`
2. **Styling**: Modify `tailwind.config.ts` for theme customization
3. **Components**: Add new components in `src/components/`
4. **Content**: Update configuration files in `src/data/config/`

## 🌐 Deployment

This portfolio is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
