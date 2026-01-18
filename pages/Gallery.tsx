
import React from 'react';

export default function Gallery() {
  /**
   * TO ADD YOUR OWN PICTURES:
   * 1. Go to Postimages.org
   * 2. Upload your photos
   * 3. Copy the 'Direct Link'
   * 4. Paste those links below in the 'url' fields.
   */
  const images = [
    { 
      // SIGNATURE TIFFANY SETUP
      url: 'https://i.postimg.cc/s2KNhmsn/Screenshot-2026-01-14-at-2-00-10-PM.png', 
      size: 'wide', 
      label: 'Signature Tiffany Setup' 
    },
    { 
      // MOVIE NIGHT SETUP
      url: 'https://i.postimg.cc/xdT3mSs7/Screenshot-2026-01-14-at-6-48-46-PM.png', 
      size: 'large', 
      label: 'Movie Night Magic' 
    },
    { 
      // BOHO DREAMSCAPE SETUP
      url: 'https://i.postimg.cc/XYPTHxT1/Screenshot-2026-01-14-at-6-34-10-PM.png', 
      size: 'large', 
      label: 'Boho Dreamscape' 
    },
    { 
      // "DIAMONDS PEARLS & BESTIES" PHOTO
      url: 'https://i.postimg.cc/tC027wFJ/Screenshot-2026-01-14-at-2-01-30-PM.png', 
      size: 'tall', 
      label: 'Diamonds, Pearls & Besties' 
    },
    { 
      // LACE TEEPEE CLOSEUP
      url: 'https://i.postimg.cc/4NB7jh4Y/Screenshot-2026-01-14-at-2-00-49-PM.png', 
      size: 'large', 
      label: 'Whimsical Lace Details' 
    },
    { url: 'https://images.unsplash.com/photo-1512418490979-92798ccc9340', size: 'large' },
    { url: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c', size: 'wide' },
    { url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688', size: 'large' },
    { url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af', size: 'tall' },
    { url: 'https://images.unsplash.com/photo-1544161515-4af6b1d462c2', size: 'large' },
    { url: 'https://images.unsplash.com/photo-1514525253361-bee8718a300a', size: 'tall' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 bg-rose-50 text-center px-4">
        <h1 className="text-5xl font-bold text-slate-800 serif mb-4">Our Gallery</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Real magic from Rockland & Bergen sleepovers.</p>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-[2rem] group shadow-sm hover:shadow-xl transition-all duration-700
                ${img.size === 'wide' ? 'md:col-span-2' : ''}
                ${img.size === 'tall' ? 'row-span-2' : ''}
              `}
            >
              <img 
                src={`${img.url}?auto=format&fit=crop&q=80&w=1000`} 
                alt={img.label || 'Setup Detail'} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-rose-400/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                 {img.label && (
                   <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     <span className="text-rose-400 font-bold uppercase tracking-wider text-sm">{img.label}</span>
                   </div>
                 )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 text-center bg-magic-gradient">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-slate-800 serif">Follow us for more magic</h2>
          <p className="text-lg text-slate-600">Get daily inspiration and see our newest themes on Instagram.</p>
          <a href="https://www.instagram.com/thedreamfactoryny/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-rose-400 font-bold text-xl hover:scale-105 transition-transform">
             <span>@thedreamfactoryny</span>
          </a>
        </div>
      </section>
    </div>
  );
}
