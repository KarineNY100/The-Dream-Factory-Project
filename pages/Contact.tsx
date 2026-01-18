
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { FAQ } from '../types';
import { ChevronDown, ChevronUp, Mail, Phone, Instagram, MapPin } from 'lucide-react';

const AccordionItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-rose-100 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-bold text-slate-800 serif">{faq.question}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-rose-300" /> : <ChevronDown className="h-5 w-5 text-rose-300" />}
      </button>
      {isOpen && (
        <div className="mt-4 text-slate-600 leading-relaxed animate-fade-in">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 bg-rose-50 text-center px-4">
        <h1 className="text-5xl font-bold text-slate-800 serif mb-4">Contact & FAQs</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Serving Rockland County, NY and Bergen County, NJ.</p>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* FAQs */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-slate-800 serif mb-8">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} faq={faq} />
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-12">
          <div className="bg-magic-gradient p-12 rounded-[3rem] space-y-8">
            <h2 className="text-3xl font-bold text-slate-800 serif">Get in Touch</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Based in Blauvelt, NY. We'd love to help you plan the perfect sleepover party!
            </p>
            
            <div className="space-y-6">
              <a href="mailto:thedreamfactoryny8@gmail.com" className="flex items-center space-x-4 group">
                <div className="bg-white p-3 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 text-rose-300" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Us</p>
                  <p className="text-lg font-bold text-slate-700">thedreamfactoryny8@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 group">
                <div className="bg-white p-3 rounded-2xl shadow-sm">
                  <MapPin className="h-6 w-6 text-rose-300" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Service Area</p>
                  <p className="text-lg font-bold text-slate-700">Rockland County, NY & Bergen County, NJ</p>
                </div>
              </div>

              <a href="https://www.instagram.com/thedreamfactoryny/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                <div className="bg-white p-3 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  <Instagram className="h-6 w-6 text-rose-300" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Follow Us</p>
                  <p className="text-lg font-bold text-slate-700">@thedreamfactoryny</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="bg-rose-50 p-8 rounded-[2rem] text-center border border-rose-100 italic text-slate-500">
            "Every child deserves a night of magic. I can't wait to style your next event!" <br />
            - Ali Brauer, Founder
          </div>
        </div>
      </section>
    </div>
  );
}
