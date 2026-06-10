import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FunBond - Gaming & Entertainment Zone',
  description: 'Experience the ultimate gaming destination inside Goldie Cinemark. Bowling, Arcade Games, VR Experiences, Racing Simulators, and Family Entertainment.',
  keywords: 'gaming, entertainment, arcade, VR, bowling, racing simulator, family fun, Nashik',
  authors: [{ name: 'FunBond Team' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'FunBond - Gaming & Entertainment Zone',
    description: 'Let\'s Play & Bond - Premium Gaming Experience',
    type: 'website',
    url: 'https://funbond.fun',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FunBond - Gaming & Entertainment Zone',
    description: 'Experience ultimate gaming and entertainment',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0a0e27" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>🎮</text></svg>" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
