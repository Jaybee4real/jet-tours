import '../styles/globals.scss';

export const metadata = {
  title: 'Safari Kenya - Tours & Airport Transfers',
  description: 'Experience the magic of Kenya with our expertly curated safari tours and premium airport transfer services.',
  keywords: 'safari, kenya, tours, wildlife, airport transfers, maasai mara, amboseli, tsavo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
