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
