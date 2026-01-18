
import React, { useState } from 'react';
import { Mail, Calendar, MapPin, Users, Send, Sparkles } from 'lucide-react';
import { THEMES } from '../constants';

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 bg-magic-gradient">
        <div className="bg-white p-12 rounded-[3rem] shadow-xl text-center max-w-lg w-full space-y-6 animate-fade-in">
          <div className="bg-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
            <Sparkles className="h-10 w-10 text-rose-400" />
          </div>
          <h2 className="text-4xl font-bold text-slate-800 serif">Magic is on the way!</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Thank you for your inquiry. Ali will review your details and get back to you personally within 24-48 hours. Let's make this the best party ever!
          </p>
          <button onClick={() => setSubmitted(false)} className="text-rose-400 font-bold hover:underline">
            Send another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 bg-rose-50 text-center px-4">
        <h1 className="text-5xl font-bold text-slate-800 serif mb-4">Start Your Inquiry</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Tell us about your event and we'll check Ali's magic calendar.</p>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-magic-gradient p-8 rounded-3xl space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 serif">Booking Info</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Inquiring is the first step! Once we confirm your date and theme availability, a $100 deposit is required to secure your spot.
              </p>
              <ul className="space-y-4 text-sm text-slate-600 font-medium">
                <li className="flex items-center space-x-2 text-rose-400">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                  <span>Confirming Date</span>
                </li>
                <li className="flex items-center space-x-2 text-rose-400">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                  <span>Deposit & Contract</span>
                </li>
                <li className="flex items-center space-x-2 text-rose-400">
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                  <span>Magic Setup Day!</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-12 rounded-[3rem] border border-rose-100 shadow-sm space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Parent's Name</label>
                  <input required type="text" className="w-full px-6 py-4 rounded-2xl border-2 border-rose-50 focus:border-rose-200 focus:outline-none bg-slate-50/50" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input required type="email" className="w-full px-6 py-4 rounded-2xl border-2 border-rose-50 focus:border-rose-200 focus:outline-none bg-slate-50/50" placeholder="hello@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                  <input required type="tel" className="w-full px-6 py-4 rounded-2xl border-2 border-rose-50 focus:border-rose-200 focus:outline-none bg-slate-50/50" placeholder="(555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Party Date</label>
                  <input required type="date" className="w-full px-6 py-4 rounded-2xl border-2 border-rose-50 focus:border-rose-200 focus:outline-none bg-slate-50/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Preferred Theme</label>
                  <select className="w-full px-6 py-4 rounded-2xl border-2 border-rose-50 focus:border-rose-200 focus:outline-none bg-slate-50/50">
                    <option>Select a theme...</option>
                    {THEMES.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                    <option value="custom">Custom Theme Idea</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Number of Teepees</label>
                  <select className="w-full px-6 py-4 rounded-2xl border-2 border-rose-50 focus:border-rose-200 focus:outline-none bg-slate-50/50">
                    <option value="3">3 Teepees</option>
                    <option value="4">4 Teepees</option>
                    <option value="5">5 Teepees</option>
                    <option value="6">6 Teepees</option>
                    <option value="6+">7+ (Custom Gala)</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Delivery Address</label>
                <input required type="text" className="w-full px-6 py-4 rounded-2xl border-2 border-rose-50 focus:border-rose-200 focus:outline-none bg-slate-50/50" placeholder="Township, State" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Special Notes or Questions</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl border-2 border-rose-50 focus:border-rose-200 focus:outline-none bg-slate-50/50" placeholder="Is this a surprise? Do you have pets? Any special requests?"></textarea>
              </div>

              <button type="submit" className="w-full bg-rose-300 hover:bg-rose-400 text-white font-bold py-5 rounded-full text-xl shadow-lg transition-all flex items-center justify-center space-x-2">
                <span>Send Inquiry to Ali</span>
                <Send className="h-6 w-6" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
