# Jnana Samskruthi Public School Website - Deployment Guide

## Overview

This is a modern, premium React website built with Vite and TailwindCSS. It's fully compatible with Netlify and other modern hosting platforms.

## Technology Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion, GSAP
- **Routing**: Wouter
- **UI Components**: shadcn/ui
- **Icons**: Lucide React, React Icons

## Project Structure

```
jsps-website/
├── client/
│   ├── public/          # Static assets (favicon, robots.txt)
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── contexts/    # React contexts
│   │   ├── hooks/       # Custom hooks
│   │   ├── lib/         # Utility functions
│   │   ├── App.tsx      # Main app component
│   │   ├── main.tsx     # Entry point
│   │   └── index.css    # Global styles
│   └── index.html       # HTML template
├── server/              # Server code (for local development)
├── netlify.toml         # Netlify configuration
└── package.json         # Dependencies
```

## Features

✅ **Responsive Design** - Mobile-first approach
✅ **Premium Animations** - Smooth transitions and scroll effects
✅ **Hero Carousel** - Auto-playing hero section with manual controls
✅ **Glassmorphism Cards** - Modern glass effect UI elements
✅ **Parallax Scrolling** - Depth and movement effects
✅ **Scroll Progress Indicator** - Visual scroll position indicator
✅ **Back-to-Top Button** - Smooth scroll to top
✅ **WhatsApp Integration** - Floating WhatsApp button
✅ **SEO Optimized** - Meta tags and semantic HTML
✅ **Accessibility** - WCAG AA compliant
✅ **Performance** - Optimized for fast loading

## Pages

1. **Home** - Hero carousel, features, testimonials, CTA
2. **About** - School history, vision, mission, infrastructure
3. **Academics** - Programs, curriculum, learning approach
4. **Facilities** - Campus facilities showcase
5. **Admissions** - Admission process, form, FAQ
6. **Gallery** - Image gallery with category filters
7. **Contact** - Contact form, location, social links

## Local Development

### Prerequisites

- Node.js 18+ or higher
- pnpm (recommended) or npm

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The development server will start at `http://localhost:3000`

## Deployment to Netlify

### Option 1: Connect GitHub Repository

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your GitHub repository
5. Configure build settings:
   - **Build command**: `pnpm build`
   - **Publish directory**: `dist/public`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Option 3: Manual Deployment

1. Build the project:
   ```bash
   pnpm build
   ```

2. Upload the `dist/public` folder to Netlify via drag-and-drop

## Environment Variables

No environment variables are required for this static site. However, you can add custom configuration in `.env` file if needed.

## Customization

### Colors

Edit `/client/src/index.css` to customize the color palette:

```css
:root {
  --primary-navy: #1a365d;
  --primary-blue: #2563eb;
  --gold-accent: #d4af37;
  /* ... more colors */
}
```

### Typography

Fonts are imported from Google Fonts in `/client/index.html`:
- **Headings**: Poppins (bold, semi-bold)
- **Body**: Inter (regular, medium, semibold)

### Content

Update content in individual page files in `/client/src/pages/`

## Performance Optimization

- Images are optimized and lazy-loaded
- CSS is minified and tree-shaken
- JavaScript is bundled and minified
- Static assets are cached
- Scroll animations respect `prefers-reduced-motion`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## SEO

The site includes:
- Meta tags for all pages
- Open Graph tags
- Semantic HTML
- Structured data ready
- Mobile-friendly design
- Fast loading performance

## Accessibility

- WCAG AA compliant
- Keyboard navigation support
- ARIA labels
- Proper color contrast
- Screen reader friendly

## Support & Maintenance

### Update Dependencies

```bash
pnpm update
```

### Check for Issues

```bash
pnpm check
```

### Format Code

```bash
pnpm format
```

## Troubleshooting

### Build Fails

1. Clear node_modules: `rm -rf node_modules && pnpm install`
2. Clear build cache: `rm -rf dist`
3. Check Node version: `node --version` (should be 18+)

### Styles Not Loading

1. Ensure TailwindCSS is properly configured
2. Check that `index.css` is imported in `main.tsx`
3. Rebuild: `pnpm build`

### Routes Not Working

1. Check that all routes are defined in `App.tsx`
2. Ensure page components are properly imported
3. Verify Wouter routing syntax

## Additional Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [Netlify Documentation](https://docs.netlify.com)

## License

© 2024 Jnana Samskruthi Public School. All rights reserved.
