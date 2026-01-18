
import React from 'react';
import { Heart, Sparkles, User, Stars, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-rose-50 text-center px-4">
        <h1 className="text-5xl font-bold text-slate-800 serif mb-4">Our Story</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Founded with love, a touch of glitter, and a big imagination in the heart of Rockland County.</p>
      </section>

      {/* Story Content */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544717305-27a734ef1904?auto=format&fit=crop&q=80&w=800" 
              alt="Ali Brauer" 
              className="rounded-[3rem] shadow-2xl relative z-10 w-full"
            />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-200 rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-200 rounded-full opacity-30 blur-2xl"></div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-800 serif">Hi, I'm Ali!</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I'm Ali Brauer, the founder of The Dream Factory and a proud mom-preneur serving families throughout Rockland County, NY and Bergen County, NJ. My journey into the world of teepee parties began with a simple passion for creating magical, "pinch-me" moments for my own children.
              </p>
              <p>
                I've always believed that a child's imagination is their greatest superpower. My mission is to give that imagination a beautiful place to play. Whether it's a birthday, a special milestone, or "just because," I treat every single party setup as if it were for my own family.
              </p>
              <p>
                The Dream Factory is about more than just rentals—it's about full-service magic. We handle the heavy lifting, the intricate styling, and the next-day cleanup so you can focus on what matters most: seeing the joy on your child's face.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
              <div className="flex items-center space-x-4">
                <div className="bg-rose-100 p-3 rounded-2xl"><Heart className="text-rose-400 h-6 w-6" /></div>
                <span className="font-bold text-slate-800">Mom-Owned</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-2xl"><Stars className="text-purple-400 h-6 w-6" /></div>
                <span className="font-bold text-slate-800">Detail Oriented</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-magic-gradient px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 serif mb-4">Our Promises to You</h2>
          <p className="text-xl text-slate-600">What makes The Dream Factory NY different.</p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Whimsy & Wonder",
              description: "We don't just 'set up tents.' We curate experiences that spark imagination and wonder.",
              icon: Sparkles
            },
            {
              title: "Safety & Hygiene",
              description: "Every single piece of our inventory is meticulously sanitized and cleaned after every party.",
              icon: ShieldCheck
            },
            {
              title: "Stress-Free Hosting",
              description: "Our goal is for you to be present in the moment, while we handle the heavy lifting.",
              icon: User
            }
          ].map((v, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="bg-white w-20 h-20 rounded-3xl shadow-md flex items-center justify-center mx-auto mb-6">
                <v.icon className="h-10 w-10 text-rose-300" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 serif">{v.title}</h3>
              <p className="text-slate-600 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
