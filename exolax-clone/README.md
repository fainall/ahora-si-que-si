# Exolax Agency Website Clone

A modern, responsive clone of the Exolax digital agency website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern dark theme design with high contrast
- 🎨 Bold typography and clean layout
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 16 and React 19
- 🎯 TypeScript for type safety
- 💨 Tailwind CSS for styling
- 🖼️ Dynamic hero section with animated text
- 📊 Interactive testimonials carousel
- 🎭 Smooth hover effects and transitions
- 📰 Blog section with featured posts
- 👥 Team showcase
- 🏆 Awards section
- 💼 Portfolio/case studies display

## Sections Included

1. **Header** - Navigation with dropdown menus, announcement bar, and CTA button
2. **Hero** - Dynamic text animation, service pills, and social proof
3. **About** - Mission, vision, and awards
4. **Services** - Three core services with hover effects
5. **Portfolio** - Case studies with project showcases
6. **Testimonials** - Client testimonials with carousel
7. **Awards** - Recognition and achievements
8. **Team** - Team member profiles
9. **Blog** - Latest news and articles
10. **CTA** - Contact section with call-to-action
11. **Footer** - Credits and social links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd exolax-clone
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Inter)
- **Images**: Unsplash (placeholder images)

## Project Structure

```
exolax-clone/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Awards.tsx
│   │   ├── Team.tsx
│   │   ├── Blog.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

### Colors
Edit the color scheme in `app/globals.css`:
```css
:root {
  --background: #000000;
  --foreground: #ffffff;
}
```

### Content
Update content in individual component files located in `app/components/`

### Images
Replace placeholder images with your own by updating the image URLs in:
- `Portfolio.tsx`
- `Team.tsx`
- `Blog.tsx`

## Design Credits

Original design by [GRAMENTHEME.COM](https://gramentheme.com)

## License

This is a clone project for educational purposes.
