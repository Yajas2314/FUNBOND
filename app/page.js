import React from 'react';

import img1 from './Image1.jpg';
import img2 from './Image2.jpg';
import img3 from './Image3.jpg';
import img4 from './Image4.png';
import img5 from './Image5.png';

{/* Top Left Logo Image */}
<div className="flex items-center space-x-3">
  <img 
    src="/logo.jpg" 
    alt="FUNBOND Logo" 
    className="h-10 w-auto object-contain rounded-lg border border-white/10"
    onError={(e) => {
      // Backup text placeholder just in case the image fails to load
      e.target.style.display = 'none';
      e.target.nextSibling.style.display = 'block';
    }}
  />
  {/* Hidden text backup that shows up only if your image breaks */}
  <span className="hidden text-xl font-extrabold tracking-wider bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
    FUNBOND
  </span>
</div>

{/* ... Your main feature/gallery sections end here ... */}

  {/* PASTE THE VISIT SECTION HERE */}
  <section className="relative my-20 max-w-4xl mx-auto px-6">
    {/* (Full interactive card code goes here) */}
  </section>

{/* PASTE THE LOCATION FOOTER HERE */}
  <footer className="w-full border-t border-white/5 py-12 bg-black/40 backdrop-blur-md">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6 text-sm text-gray-400">
      {/* Address details go here */}
    </div>
  </footer>
