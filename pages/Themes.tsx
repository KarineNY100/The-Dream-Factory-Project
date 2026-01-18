
import React, { useState } from 'react';
import { THEMES } from '../constants';
import { Sparkles, Search, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Themes() {
  const [filter, setFilter] = useState('');
  
  const filteredThemes = THEMES.filter(t => 
    t.name.toLowerCase().includes(filter.toLowerCase()) || 
    t.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 bg-magic-gradient text-center px-4 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 serif mb-6">Our Magical Themes</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            From movie stars to mermaid tails, choose the perfect backdrop for your child's next big adventure.
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Find a theme (e.g. 'Swiftie', 'Safari')..."
              className="w-full pl-12 pr-6 py-4 rounded-full border-2 border-rose-100 focus:outline-none focus:border-rose-300 shadow-sm text-slate-600"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredThemes.map((theme) => (
            <div key={theme.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-rose-50 hover:shadow-xl transition-all duration-500 flex flex-col h-full">
              <div className="relative h-80 overflow-hidden bg-slate-100">
                {theme.video ? (
                  <video
                    src={theme.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <img 
                    src={theme.image} 
                    alt={theme.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                
                {theme.video && (
                  <div className="absolute top-4 left-4 bg-black/20 backdrop-blur-md p-2 rounded-full">
                    <Play className="h-4 w-4 text-white fill-current" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <Link to="/booking" className="text-white font-bold flex items-center space-x-2">
                     <span>Check Availability</span>
                     <ArrowRight className="h-5 w-5" />
                   </Link>
                </div>
                <div className="absolute top-6 right-6 flex flex-wrap gap-2">
                  {theme.tags.map(tag => (
                    <span key={tag} className="bg-white/90 backdrop-blur-sm text-rose-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 serif mb-3">{theme.name}</h3>
                  <p className="text-slate-600 leading-relaxed italic line-clamp-3">"{theme.description}"</p>
                </div>
                <div className="pt-6 border-t border-rose-50 flex items-center justify-between">
                   <div className="flex items-center space-x-1 text-rose-300">
                     <Sparkles className="h-4 w-4" />
                     <span className="text-sm font-semibold uppercase tracking-widest">Premium Decor</span>
                   </div>
                   <Link to="/booking" className="text-rose-400 font-bold hover:underline">Book Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredThemes.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-slate-400 serif">Oops! We don't have that theme yet. Contact us for custom requests!</p>
          </div>
        )}
      </section>

      <section className="py-20 bg-rose-50 px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-800 serif mb-6">Have a custom theme in mind?</h2>
        <p className="text-lg text-slate-600 max-w-xl mx-auto mb-10">We love creating new experiences! Let us know your vision and we'll do our best to make it a reality.</p>
        <Link to="/contact" className="inline-block border-2 border-rose-300 text-rose-400 px-8 py-4 rounded-full font-bold hover:bg-rose-100 transition-all">
          Request Custom Theme
        </Link>
      </section>
    </div>
  );
}
