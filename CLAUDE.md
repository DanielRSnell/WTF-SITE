# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**WooThatsFast** is a specialized hosting and optimization service exclusively focused on WooCommerce businesses. This website serves as the primary marketing and service portal for the business, built from an Astro template that needs complete content transformation to align with the WooCommerce hosting specialization.

### Project Mission
Bridge the gap between expensive managed hosting and complex self-hosting by providing full server ownership with expert WooCommerce-specific support and optimization for businesses generating $200k-$5M annually.

## Architecture & Tech Stack

- **Framework**: Astro 5.x with React integration
- **Styling**: Tailwind CSS 4.x with shadcn/ui components
- **Content**: MDX for blog posts and documentation
- **Build System**: Vite with TypeScript
- **Deployment**: Configured for Vercel/Netlify/Cloudflare Pages

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Lint and format code
npm run lint

# Run Astro CLI commands
npm run astro
```

## Key Service Offerings (Content Strategy)

The site must be restructured around six core services:

1. **Self-Hosted Management Service** - Complete server setup with WooCommerce optimization
2. **Website Optimization** - Frontend performance improvements for existing sites
3. **Advanced Support Plans** ($1,250-$2,500/month) - On-demand expert development
4. **Core Web Vitals Management** ($325/month) - Guaranteed performance metrics
5. **Unlimited Development Requests** ($4,000/month) - Flat-rate development service
6. **Optimized WooCommerce Migrations** - Clean migrations with performance improvements

## Content Structure Requirements

### Homepage Strategy
- **Hero**: "WooCommerce Hosting & Optimization That Actually Understands Your Business"
- **Value Props**: Speed (3x faster), Ownership (your servers), Expertise (real WooCommerce devs), Economics (enterprise performance at startup prices)
- **Primary CTA**: "Get Performance Analysis" (free audit)
- **Social Proof**: Client testimonials with before/after performance improvements

### Required Pages
- Individual service landing pages for each of the 6 services
- Comparison pages (vs. managed hosting, vs. self-hosting, vs. agencies)
- About/team pages emphasizing WooCommerce expertise
- Resource section with WooCommerce-focused blog content
- Client portal for plugin access and account management

## Component Architecture

### Layout Components (`src/components/layout/`)
- `navbar.tsx` - Main navigation with service-focused menu items
- `footer.tsx` - Footer with service links and company information
- `logo.tsx` - WooThatsFast branding

### Section Components (`src/components/sections/`)
Key sections need WooCommerce hosting context:
- `hero.tsx` - Primary conversion messaging
- `features.tsx` - Service-specific features and benefits
- `testimonials.tsx` - Client success stories with performance metrics
- `compatibility.tsx` - WooCommerce plugin and integration compatibility
- `faq.tsx` - WooCommerce hosting and optimization FAQs

### Content Guidelines

#### Tone & Messaging
- Expert but approachable - demonstrates deep WooCommerce technical knowledge
- Results-focused - emphasize performance improvements and business impact
- Anti-managed hosting positioning - highlight control and cost advantages
- Technical credibility - use specific metrics and WooCommerce terminology

#### Target Audience Considerations
- **Primary**: Established WooCommerce businesses ($200k-$5M revenue)
- **Secondary**: Growing sites ($100k-$500k revenue) outgrowing shared hosting
- Pain points: managed hosting markups, poor Core Web Vitals, lack of WooCommerce expertise, limited server control

## File Organization

### Constants & Configuration
- `src/consts.ts` - Site metadata, branding, and global constants (needs WooThatsFast updates)
- `src/content.config.ts` - Content collections configuration
- `astro.config.mjs` - Build configuration

### Content Management
- `src/content/blog/` - WooCommerce optimization and hosting articles
- `src/data/products.json` - Service offerings and pricing information

### Styling
- `src/styles/global.css` - Global styles and Tailwind configuration
- Component-level styling using Tailwind classes

## Key Implementation Notes

### Service Page Structure
Each service needs:
- Clear value proposition and benefits
- Technical details and implementation process
- Transparent pricing information
- Service-specific FAQs and objection handling
- Related service cross-sell opportunities
- Conversion-focused CTAs

### Performance Focus
Given the performance optimization focus of the business:
- Implement Core Web Vitals monitoring
- Optimize all images and assets
- Use proper loading strategies for interactive components
- Maintain fast page load times as credibility indicator

### WooCommerce Context
All content should demonstrate deep WooCommerce understanding:
- Reference specific WooCommerce functionality and challenges
- Use e-commerce performance metrics and terminology
- Address WooCommerce-specific hosting requirements
- Highlight plugin compatibility and optimization expertise

## Asset Management

### Existing Assets (Keep)
- Favicon and branding assets in `/public/favicon/`
- Image structure in `/public/images/` (replace content, keep organization)
- Layout assets like logo placeholders

### Content Replacement Strategy
- Replace all demo/template images with WooCommerce-focused visuals
- Update testimonial content with real WooCommerce client stories
- Replace blog content with WooCommerce optimization topics
- Update feature imagery to reflect hosting and performance themes

## Testing & Validation

When implementing changes:
- Test responsive design across devices
- Validate accessibility with screen readers
- Check performance impact of new components
- Verify all CTAs and conversion paths work properly
- Test blog post rendering and navigation

## Content Migration Priority

1. Site constants and metadata (branding, descriptions, keywords)
2. Homepage hero and core messaging
3. Service pages and navigation structure
4. About/team content with WooCommerce expertise positioning
5. Blog content replacement with WooCommerce topics
6. Testimonials and social proof updates
7. FAQ content for common WooCommerce hosting questions