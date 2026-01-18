
import React from 'react';
import { PACKAGES } from '../constants';
import { Check, Info, Clock, Truck, Hammer, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Step = ({ icon: Icon, title, description, step }: any) => (
  <div className="flex flex-col items-center text-center space-y-4">
    <div className="relative">
      <div className="bg-rose-50 w-20 h-20 rounded-full flex items-center justify-center border-2 border-rose-100">
        <Icon className="h-8 w-8 text-rose-300" />
      </div>
      <div className="absolute -top-2 -right-2 bg-rose-300 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-4 border-white">
        {step}
      </div>
    </div>
    <h3 className="text-xl font-bold text-slate-800 serif">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-rose-50 text-center px-4">
        <h1 className="text-5xl font-bold text-slate-800 serif mb-4">Packages & Pricing</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Everything you need for a magical sleepover, all in one place.</p>
      </section>

      {/* Packages Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PACKAGES.map((pkg, i) => (
            <div key={i} className={`relative p-12 rounded-[3rem] border-2 flex flex-col justify-between ${i === 1 ? 'border-rose-200 bg-rose-50/30 shadow-xl scale-105 z-10' : 'border-rose-100 bg-white shadow-sm'}`}>
              {i === 1 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-300 text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-3xl font-bold text-slate-800 serif mb-2">{pkg.name}</h3>
                <p className="text-slate-500 mb-6">{pkg.description}</p>
                <div className="text-4xl font-bold text-slate-800 mb-8">{pkg.price} <span className="text-lg text-slate-400 font-normal">/ setup</span></div>
                
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-slate-600">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link 
                to="/booking" 
                className={`w-full py-4 rounded-full font-bold text-center transition-all ${i === 1 ? 'bg-rose-300 text-white hover:bg-rose-400 shadow-md' : 'bg-white text-rose-300 border-2 border-rose-100 hover:bg-rose-50'}`}
              >
                Inquire Today
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-magic-gradient px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-800 serif mb-4">Every Setup Includes</h2>
            <p className="text-lg text-slate-600">Premium quality and thoughtful details are our standard.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Teepees & Beds', img: 'https://images.unsplash.com/photo-1544623026-6ff441314a97?auto=format&fit=crop&q=80&w=300' },
              { label: 'Cozy Bedding', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=300' },
              { label: 'Themed Decor', img: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=300' },
              { label: 'Mood Lighting', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80&w=300' },
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <img src={item.img} alt={item.label} className="w-full h-40 object-cover rounded-3xl shadow-md border-4 border-white" />
                <p className="font-bold text-slate-800 serif">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-800 serif mb-4">How It Works</h2>
            <p className="text-lg text-slate-600">The stress-free journey to magic.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <Step 
              step="1"
              icon={Clock}
              title="Pick a Date"
              description="Choose your date and check our availability using our simple inquiry form."
            />
            <Step 
              step="2"
              icon={Sparkles}
              title="Choose a Theme"
              description="Select one of our 13+ magical themes that fits your child's vibe perfectly."
            />
            <Step 
              step="3"
              icon={Truck}
              title="Setup Day"
              description="We arrive, transform your space, and leave it looking picture-perfect."
            />
            <Step 
              step="4"
              icon={Hammer}
              title="Easy Pickup"
              description="The next day, we come back to pack it all away. You don't lift a finger!"
            />
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 bg-rose-50">
        <div className="max-w-4xl mx-auto bg-white p-12 rounded-[3rem] shadow-sm border border-rose-100 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-grow space-y-4">
            <h3 className="text-3xl font-bold text-slate-800 serif">Make it extra special...</h3>
            <p className="text-slate-600 leading-relaxed">We offer optional add-ons including: Personalized party favors, luxury balloon garlands, snack packs, and even professional photography!</p>
            <Link to="/contact" className="inline-block text-rose-400 font-bold border-b-2 border-rose-200 hover:text-rose-600">Ask about our add-on menu</Link>
          </div>
          <div className="bg-magic-gradient p-8 rounded-full">
            <Info className="h-16 w-16 text-rose-300" />
          </div>
        </div>
      </section>
    </div>
  );
}
