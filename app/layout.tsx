import React from 'react';
// Using the absolute root alias (@/) to completely stop path errors
import '@/app/global.css'; 

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>FUNBOND | Experience Arena</title>
        <meta name="description" content="Next-Generation Amusement Micro-Environments" />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
