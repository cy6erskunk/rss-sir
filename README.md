# RSS-Sir

RSS-Sir is an RSS feed aggregator built with Astro that displays recent articles from multiple RSS feeds. The application fetches RSS sources from a Firebase Firestore database and displays feed items from the last 24 hours.

## Features

- 📡 Aggregates multiple RSS feeds from Firebase Firestore
- 🕐 Shows articles from the last 24 hours
- 🎨 Dark/light theme support
- 📱 Responsive design
- ⚡ Static site generation with Astro
- 🔥 Firebase Firestore backend

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── rss-sir-logo.png
├── src/
│   ├── assets/          # Static assets (SVG icons, backgrounds)
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/      # Astro components
│   │   ├── Feed.astro       # Main RSS feed display component
│   │   └── ThemeSwitcher.astro
│   ├── firebase/        # Firebase configuration
│   │   └── server.ts        # Firebase Admin SDK setup
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   └── pages/           # Astro pages (routes)
│       └── index.astro
├── .env.example         # Environment variable template
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`    | Get help using the Astro CLI                     |

## 🔧 Environment Setup

1. Copy `.env.example` to `.env` and fill in your Firebase credentials
2. Set up a Firebase Firestore database with a `sources` collection
3. Add RSS feed URLs to the `sources` collection (each document should have a `url` field)

## 📚 Documentation

For details on project architecture, coding conventions, and best practices, see [`.github/copilot-instructions.md`](.github/copilot-instructions.md).

When making changes to the project:
- Update both this README and `.github/copilot-instructions.md` to keep documentation in sync
- The README provides user-facing documentation
- The Copilot instructions provide developer-facing guidance for code contributions

## 📦 Dependencies

Dependencies are automatically managed by Renovate bot. Version numbers in `package.json` are locked and will be updated through automated pull requests.
