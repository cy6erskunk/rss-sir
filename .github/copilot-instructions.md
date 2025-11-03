# Copilot Instructions for RSS-Sir

## Project Overview

RSS-Sir is an RSS feed aggregator built with Astro that displays recent articles from multiple RSS feeds. The application fetches RSS sources from a Firebase Firestore database and displays feed items from the last 24 hours.

## Technology Stack

- **Framework**: Astro 5.x
- **Runtime**: Node.js with TypeScript
- **Database**: Firebase Firestore (for storing RSS feed sources)
- **Package Manager**: pnpm
- **RSS Parsing**: rss-parser library
- **Deployment**: GitHub Pages (base path: `/rss-sir/`)

## Project Structure

```
/
├── src/
│   ├── assets/          # Static assets (SVG icons, backgrounds)
│   ├── components/      # Astro components
│   │   ├── Feed.astro       # Main RSS feed display component
│   │   └── ThemeSwitcher.astro
│   ├── firebase/        # Firebase configuration
│   │   └── server.ts        # Firebase Admin SDK setup
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   └── pages/           # Astro pages (routes)
│       └── index.astro
├── public/              # Public static assets
└── .env.example         # Environment variable template
```

## Code Style and Conventions

### TypeScript

- Use strict TypeScript configuration (extends `astro/tsconfigs/strict`)
- Define interfaces for all data structures
- Use type imports when importing types: `import type { ServiceAccount } from 'firebase-admin'`
- Avoid `any` types; use proper type definitions

### Astro Components

- Use `.astro` extension for Astro components
- Define component props using TypeScript interfaces in the frontmatter
- Use destructuring for props with default values
- Keep styles scoped within components using `<style>` blocks
- Use CSS custom properties (CSS variables) for theming

### CSS Conventions

- Use CSS custom properties for colors, spacing, and other design tokens
- Follow mobile-first responsive design principles
- Use semantic class names (e.g., `feed-item`, `item-title`, `item-summary`)
- Use `:global()` for styling dynamic HTML content

### Firebase Integration

- Firebase Admin SDK is initialized in `src/firebase/server.ts`
- Environment variables are used for Firebase credentials (see `.env.example`)
- Always check if Firebase app is initialized before initializing again
- Export only necessary Firebase services (db, auth, admin)

## Architecture Patterns

### Data Flow

1. Page components (`src/pages/index.astro`) fetch data during SSG build
2. Firebase Firestore stores RSS feed source URLs in a `sources` collection
3. RSS feeds are parsed using `rss-parser` library
4. Feed items from the last 24 hours are filtered and sorted by date
5. Components render the aggregated feed items

### Server-Side Rendering

- Astro performs static site generation (SSG) by default
- Firebase operations happen at build time, not runtime
- Async data fetching is done in the frontmatter of `.astro` files

### Error Handling

- Use `Promise.allSettled()` when fetching multiple RSS feeds to handle failures gracefully
- Log errors to console with descriptive messages
- Continue rendering even if some feeds fail to load

## Environment Variables

Required environment variables (see `.env.example`):

- `FIREBASE_PROJECT_ID`
- `FIREBASE_PRIVATE_KEY_ID`
- `FIREBASE_PRIVATE_KEY` (handle escaped newlines: `.replace(/\\n/g, '\n')`)
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_CLIENT_ID`
- `FIREBASE_AUTH_URI`
- `FIREBASE_TOKEN_URI`
- `FIREBASE_AUTH_PROVIDER_X509_CERT_URL`
- `FIREBASE_CLIENT_X509_CERT_URL`

## Common Tasks

### Development

```bash
pnpm install          # Install dependencies
pnpm dev             # Start development server at localhost:4321
pnpm build           # Build for production
pnpm preview         # Preview production build locally
```

### Adding New Features

- **New RSS Feed Sources**: Add to Firebase Firestore `sources` collection
- **New Components**: Create in `src/components/` with `.astro` extension
- **Styling**: Use scoped styles in components or extend Layout component
- **New Pages**: Add to `src/pages/` (Astro uses file-based routing)

## Dependencies

### Core Dependencies

- `astro@5.13.5`: Static site generator framework
- `firebase@12.3.0`: Firebase client SDK
- `firebase-admin@13.5.0`: Firebase Admin SDK for server-side operations
- `rss-parser@3.13.0`: RSS/Atom feed parsing library

### Adding New Dependencies

- Use `pnpm add <package>` to add dependencies
- Keep dependencies minimal and well-maintained
- Prefer Astro-native solutions when available
- **Note**: Dependency versions in `package.json` are locked and automatically managed by Renovate bot

## Best Practices

1. **Security**: Never commit Firebase credentials or API keys to the repository
2. **Performance**: Parse feeds in parallel using `Promise.allSettled()`
3. **User Experience**: Handle feed parsing errors gracefully without breaking the UI
4. **Accessibility**: Use semantic HTML and proper heading hierarchy
5. **Responsive Design**: Ensure components work on mobile and desktop
6. **Type Safety**: Always use TypeScript interfaces for data structures
7. **Code Organization**: Keep components focused and single-responsibility
8. **Documentation**: When making changes to the project, update both `README.md` and this file (`.github/copilot-instructions.md`) to keep documentation in sync

## Known Constraints

- Base path is set to `/rss-sir/` for GitHub Pages deployment
- Trailing slashes are enforced in URLs
- RSS feeds must be publicly accessible (CORS-compatible)
- Only shows feed items from the last 24 hours
- Firebase operations happen at build time (SSG), not at request time

## Testing

Currently, this project does not have automated tests. When adding tests:

- Use Astro's recommended testing tools
- Test component rendering and data fetching logic
- Mock Firebase operations in tests
- Test RSS feed parsing with various feed formats
