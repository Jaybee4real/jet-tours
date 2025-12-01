import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import '../styles/globals.scss';

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const viewport = {
  themeColor: '#c9a961',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL('https://jet-tours.com'),
  title: {
    default: 'J.E.T Tours & Safari - Kenya Tours & Airport Transfers',
    template: '%s | J.E.T Tours & Safari'
  },
  description: 'Experience the magic of Kenya with our expertly curated safari tours and premium airport transfer services.',
  keywords: 'safari, kenya, tours, wildlife, airport transfers, maasai mara, amboseli, tsavo, jet tours, african safari, kenya wildlife',
  authors: [{ name: 'J.E.T Tours & Safari' }],
  creator: 'J.E.T Tours & Safari',
  publisher: 'J.E.T Tours & Safari',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'J.E.T Tours',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jet-tours.com',
    siteName: 'J.E.T Tours & Safari',
    title: 'J.E.T Tours & Safari - Kenya Tours & Airport Transfers',
    description: 'Experience the magic of Kenya with our expertly curated safari tours and premium airport transfer services.',
  },
  twitter: {
    card: 'summary',
    title: 'J.E.T Tours & Safari - Kenya Tours & Airport Transfers',
    description: 'Experience the magic of Kenya with our expertly curated safari tours and premium airport transfer services.',
    creator: '@jettours',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
