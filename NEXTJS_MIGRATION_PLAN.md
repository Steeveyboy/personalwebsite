# Next.js Migration Plan

## Context

The site is currently a Create React App (React 17) single-page app deployed to GitHub Pages. The goal is to switch to Next.js so the page ships real pre-rendered HTML (instead of a blank `<div id="root">` that hydrates via JS), improving SEO and perceived load time.

Since GitHub Pages is a static host (no Node.js server at runtime), `output: 'export'` is used — Next.js pre-renders all pages to static HTML at build time. This is the practical equivalent of SSR for a portfolio with static content: bots and browsers see real HTML immediately without waiting for JavaScript to hydrate.

---

## File Map

| File | Action |
|------|--------|
| `my-app/package.json` | Replace: swap `react-scripts` for `next@14`, upgrade to React 18 |
| `my-app/next.config.js` | **Create** |
| `my-app/src/app/layout.js` | **Create**: HTML shell + SEO metadata |
| `my-app/src/app/page.js` | **Create**: replaces `App.js` |
| `my-app/src/app/globals.css` | **Create**: merges `App.css` + `index.css` |
| `my-app/src/components/*.js` | Migrate: fix `class=` → `className=`, fix image paths |
| `my-app/public/images/OttawaSkyline1080.jpeg` | **Move** from `my-app/src/` |
| `my-app/public/.nojekyll` | **Create** (prevents GitHub Pages from ignoring `_next/` assets) |
| `.github/workflows/deploy.yml` | Update artifact path `build/` → `out/` |
| `my-app/src/index.js` | **Delete** |
| `my-app/public/index.html` | **Delete** |
| `my-app/public/manifest.json` | **Delete** |

---

## Implementation Steps

### 1. Replace `package.json`

Remove `react-scripts`. New content:

```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  }
}
```

### 2. Create `my-app/next.config.js`

```js
const nextConfig = {
  output: 'export',          // emit static HTML to /out instead of running a server
  images: { unoptimized: true },  // GitHub Pages has no image optimization server
};
module.exports = nextConfig;
```

### 3. Create `my-app/src/app/layout.js`

Replaces `public/index.html` and `src/index.js`. Adds SEO meta tags via the Next.js Metadata API (injected into pre-rendered HTML at build time).

```jsx
import './globals.css';

export const metadata = {
  title: 'Jon Steeves',
  description: 'Personal website of Jonathon Steeves — software developer based in Ottawa.',
  openGraph: {
    title: 'Jon Steeves',
    description: 'Personal website of Jonathon Steeves',
    url: 'https://www.jonsteeves.dev',
    siteName: 'Jon Steeves',
    locale: 'en_CA',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### 4. Create `my-app/src/app/globals.css`

Merge `App.css` + `index.css`. One change required: the background-image URL must become an absolute path since the file moves to `public/images/`:

```css
/* Before (App.css) */
background-image: url("OttawaSkyline1080.jpeg");

/* After (globals.css) */
background-image: url("/images/OttawaSkyline1080.jpeg");
```

### 5. Create `my-app/src/app/page.js`

Replaces `App.js`. Same section structure. Fixes:
- All `class=` → `className=` on the 5 wrapper divs
- Image paths: `"./images/..."` → `"/images/..."` for the two project screenshots

### 6. Move background image

```
my-app/src/OttawaSkyline1080.jpeg  →  my-app/public/images/OttawaSkyline1080.jpeg
```

### 7. Migrate components

All CSS files stay unchanged. Only the JS files need edits:

**`about.js` → `About.js`**
- `class="aboutText"` → `className="aboutText"`
- `src="./images/mecircle.png"` → `src="/images/mecircle.png"`

**`books.js` → `Books.js`**
- 3× `class="bookChoice"` → `className="bookChoice"`
- 3× `class="bookDescription"` → `className="bookDescription"`
- 3 image srcs: `"images/..."` → `"/images/..."`

**`projectLeftExample.js` → `ProjectLeft.js`**
- `class="imgLeft"` → `className="imgLeft"`

**`projectRightExample.js` → `ProjectRight.js`**
- `class="imgRight"` → `className="imgRight"`

**`header.js`, `footer.js`** — Already use `className`. Also fix the broken email link in `footer.js`: `href="#books"` → `href="mailto:jonathan.qsteeves@gmail.com"`.

### 8. Create `my-app/public/.nojekyll`

Empty file. Next.js copies `public/` to `out/` during export. Without this, GitHub Pages' Jekyll processor ignores `_next/` directories (they start with `_`), breaking all JS and CSS bundles.

### 9. Update `.github/workflows/deploy.yml`

One line change — artifact path:

```yaml
# Before
path: my-app/build

# After
path: my-app/out
```

### 10. Delete CRA-specific files

- `my-app/src/index.js`
- `my-app/public/index.html`
- `my-app/public/manifest.json`

---

## Verification

1. `cd my-app && npm install` — installs next, react 18, react-dom 18
2. `npm run dev` — visit `http://localhost:3000`, confirm all sections render with correct layout and images
3. `npm run build` — confirm `my-app/out/` is created containing `index.html`, `_next/`, and `images/`
4. Check `my-app/out/index.html` — should contain real HTML content (headings, text, not just a blank div)
5. Confirm `my-app/out/.nojekyll` exists
6. Push to `main` → GitHub Actions build passes → `https://www.jonsteeves.dev` loads correctly
