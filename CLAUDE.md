# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
```bash
pnpm dev                    # Start development server (Next.js + Payload admin)
pnpm build                  # Production build with Payload migrations
pnpm start                  # Start production server
pnpm ci                     # Run migrations then build (CI/CD)
```

### Code Quality
```bash
pnpm lint                   # Run ESLint
pnpm lint:fix              # Fix ESLint issues automatically
```

### Testing
```bash
pnpm test                   # Run all tests (integration + e2e)
pnpm test:int              # Run integration tests with Vitest
pnpm test:e2e              # Run Playwright e2e tests
```

### Payload CMS Commands
```bash
pnpm payload migrate:create # Create new database migration
pnpm payload migrate       # Run pending migrations
pnpm payload generate:types # Generate TypeScript types from schema
```

## Architecture Overview

### Dual Application Structure
This is a **monolithic Next.js application** that serves both:
1. **Frontend Website** (`/src/app/(frontend)/`) - Public-facing pages with SSG/ISR
2. **Admin Panel** (`/src/app/(payload)/`) - Payload CMS admin interface at `/admin`

### Content Management Architecture
- **Collections**: Pages, Posts, Media, Categories, Users
- **Globals**: Header, Footer (site-wide content)
- **Layout Builder**: Modular block system for flexible page layouts
- **Draft System**: Preview unpublished content with scheduled publishing

### Database & Storage
- **PostgreSQL**: Primary database with migration-based schema management
- **Vercel Blob Storage**: Media uploads and file storage
- **Schema-First**: Database changes require migrations (`pnpm payload migrate:create`)

### Key Patterns

#### Block-Based Content System
Pages and Posts use a flexible block system defined in `/src/blocks/`:
- Each block has: `config.ts` (schema), `Component.tsx` (render)
- Blocks are rendered via `RenderBlocks.tsx` component
- New blocks must be registered in both the collection config and render component

#### Hero Variants
Three hero types in `/src/heros/`: HighImpact, MediumImpact, LowImpact
- Configured per page/post in admin panel
- Rendered via `RenderHero.tsx` component

#### Access Control Pattern
- **Public**: Published pages/posts (read-only)
- **Authenticated**: Admin users (full CRUD)
- Defined in `/src/access/` directory

#### Revalidation System
- **On-demand ISR**: Content changes trigger Next.js revalidation
- **Hooks**: `afterChange` hooks in collections call revalidation functions
- **Cache Strategy**: Static generation with smart invalidation

### Plugin Architecture
Payload plugins configured in `/src/plugins/index.ts`:
- **SEO Plugin**: Meta tags, OG images, structured data
- **Search Plugin**: Full-text search across posts
- **Form Builder**: Contact forms with validation
- **Redirects Plugin**: URL redirect management
- **Nested Docs**: Hierarchical categories

### Frontend Routing
```
/                           # Homepage (uses slug-based page lookup)
/[slug]                     # Dynamic pages from Pages collection
/posts                      # Blog listing page
/posts/[slug]               # Individual blog posts
/search                     # Search functionality
/admin                      # Payload CMS admin panel
```

### Environment Configuration
Essential environment variables:
- `POSTGRES_URL` - Database connection
- `BLOB_READ_WRITE_TOKEN` - File storage
- `PAYLOAD_SECRET` - JWT signing
- `CRON_SECRET` - Scheduled job authentication

### Development Workflow
1. **Schema Changes**: Modify collection configs → create migration → run migration
2. **Content Blocks**: Add to `/src/blocks/` → register in collections → update `RenderBlocks.tsx`
3. **Styling**: TailwindCSS with shadcn/ui components in `/src/components/ui/`
4. **Type Safety**: Auto-generated types in `payload-types.ts` from schema

### Deployment Patterns
- **Vercel**: Automatic deployments with integrated Postgres + Blob storage
- **Docker**: Multi-stage build with standalone Next.js output
- **Database**: Migrations run automatically in CI via `pnpm ci` command

### Key Files for Architecture Changes
- `/src/payload.config.ts` - Main CMS configuration
- `/src/collections/` - Content schema definitions  
- `/src/plugins/index.ts` - Plugin configuration
- `/src/blocks/RenderBlocks.tsx` - Block rendering logic
- `/src/heros/RenderHero.tsx` - Hero rendering logic