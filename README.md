# Most. Afshara Tasnim Ritu — Academic Portfolio

A premium, elegant Next.js 14 portfolio with public study materials library and secure admin upload panel.

## Quick Start

### 1. Install
```bash
npm install
```

### 2. Environment — copy `.env.example` to `.env.local`
```env
MONGODB_URI=mongodb://localhost:27017/ritu_portfolio
ADMIN_SECRET=choose_a_very_strong_secret
SESSION_SECRET=another_random_secret
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Create uploads directory
```bash
mkdir -p public/uploads
```

### 4. Run
```bash
npm run dev
# open http://localhost:3000
```

## Admin Panel
- Login at `/admin` with your `ADMIN_SECRET`
- Upload / edit / delete study materials at `/admin/dashboard`

## Customise Content
All placeholder content is in the page files — swap in real details:
- `components/home/Hero.tsx` — name, stats
- `app/about/page.tsx` — biography
- `components/sections/TimelineSection.tsx` — timeline events
- `app/teaching/page.tsx` — courses, publications
- `components/layout/Footer.tsx` + `app/contact/page.tsx` — contact info

## Add Profile Photo
Place `profile.jpg` in `public/` then in `Hero.tsx` replace the monogram with:
```tsx
import Image from 'next/image';
<Image src="/profile.jpg" alt="Afshara Tasnim Ritu" fill className="object-cover rounded-full" />
```

## Tech Stack
Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · MongoDB + Mongoose
# ritu-maam-portfolio
# ritu-maam-portfolio
