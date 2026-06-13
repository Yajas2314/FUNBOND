import React from 'react';
import './global.css'; 

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
