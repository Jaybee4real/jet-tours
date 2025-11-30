# Safari Website - Setup Instructions

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Images
The website requires images to be placed in the `/public/images` directory. See `/public/images/placeholder.txt` for the complete list of required images.

**Quick Start with Placeholder Images:**
- Download safari images from [Unsplash](https://unsplash.com/s/photos/kenya-safari) or [Pexels](https://www.pexels.com/search/kenya%20safari/)
- Or reference images from the inspiration site: https://impeccablesafaris.com/
- Place images in the appropriate directories as outlined in `placeholder.txt`

### 3. Configure Google Forms
Replace the placeholder Google Form URLs in `/src/app/page.jsx`:

**Booking Form:**
```javascript
src="https://docs.google.com/forms/d/e/YOUR_BOOKING_FORM_ID/viewform?embedded=true"
```

**Partners Form:**
```javascript
src="https://docs.google.com/forms/d/e/YOUR_PARTNER_FORM_ID/viewform?embedded=true"
```

### 4. Update Contact Information
Edit `/src/components/Footer.jsx` to update:
- Email addresses
- Phone numbers
- Physical address
- Social media links

### 5. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

## Project Structure

```
jet-website/
├── public/
│   └── images/          # Static images
├── src/
│   ├── app/             # Next.js app router pages
│   ├── components/      # Reusable components
│   ├── data/            # Data modules (destinations, services, etc.)
│   ├── sections/        # Page sections
│   └── styles/          # SCSS styles
├── package.json
├── next.config.js
└── README.md
```

## Customization

### Colors
Edit `/src/styles/variables.scss` to change the color scheme:
```scss
$color-gold: #bea26a;
$color-charcoal: #1d1b16;
$color-beige: #f5efe0;
$color-safari-green: #3a4a3a;
```

### Content
- **Destinations:** Edit `/src/data/destinations.js`
- **Services:** Edit `/src/data/services.js`
- **Gallery:** Edit `/src/data/gallery.js`
- **Partners:** Edit `/src/data/partners.js`

### Fonts
The site uses Google Fonts (Playfair Display & Inter). To change fonts, edit `/src/styles/globals.scss`.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ SCSS styling with custom theme
- ✅ Swiper.js carousel for gallery
- ✅ Custom modals for booking and partnerships
- ✅ Google Forms integration
- ✅ SEO optimized with Next.js metadata
- ✅ Smooth scroll navigation
- ✅ Accessibility features (ARIA labels, keyboard navigation)
- ✅ Image optimization with Next.js Image component

## Troubleshooting

### Images not loading
- Ensure images are placed in `/public/images/` directory
- Check image paths in data modules match actual file names
- Verify image file extensions (jpg, png)

### Swiper carousel not working
- Ensure Swiper CSS is imported in `GalleryCarousel.jsx`
- Check browser console for errors

### Google Forms not embedding
- Verify form URLs are correct
- Ensure forms are set to "Anyone with the link can respond"
- Check if iframes are blocked by browser extensions

## Support

For issues or questions, contact: info@safarikenya.com

---

Built with Next.js 14, React 18, and SCSS
