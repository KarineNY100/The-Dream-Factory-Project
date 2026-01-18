
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, Heart, ShieldCheck, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-8 bg-white rounded-3xl shadow-sm border border-rose-50 hover:shadow-md transition-shadow text-center">
    <div className="bg-rose-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
      <Icon className="h-8 w-8 text-rose-300" />
    </div>
    <h3 className="text-xl font-bold mb-4 text-slate-800 serif">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-magic-gradient overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-bold tracking-wide uppercase">
              <Sparkles className="h-4 w-4" />
              <span>Rockland & Bergen's #1 Teepee Party Service</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 leading-[1.1] serif">
              Creating <span className="text-rose-300">Magic</span> <br /> 
              One Sleepover <br />
              At a Time.
            </h1>
            <p className="text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              We bring the dream to your home. Custom-styled indoor teepee parties designed for unforgettable memories across NY and NJ.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/booking" className="bg-rose-300 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-rose-400 transition-all flex items-center justify-center space-x-2 group">
                <span>Book Your Magic</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/themes" className="bg-white text-rose-300 border-2 border-rose-100 px-8 py-4 rounded-full text-lg font-bold hover:bg-rose-50 transition-all flex items-center justify-center">
                Explore Themes
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl rotate-3 scale-95 hover:rotate-0 hover:scale-100 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1512418490979-92798ccc9340?auto=format&fit=crop&q=80&w=1200" 
                alt="Magical Teepee Setup" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Decorative Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center space-x-4 max-w-xs animate-bounce">
              <div className="bg-yellow-50 p-3 rounded-xl">
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
              </div>
              <div>
                <p className="font-bold text-slate-800">5-Star Experiences</p>
                <p className="text-sm text-slate-500">Trusted by local Moms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-slate-800 serif">Why Parents Love The Dream Factory</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            We know how special milestones are. Our mission is to transform your living room into a magical escape where your child's imagination can run wild. From delivery to next-day breakdown, we handle it all.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <FeatureCard 
              icon={Heart}
              title="Full Service"
              description="We deliver, style, and pick up. You just enjoy the smiles!"
            />
            <FeatureCard 
              icon={Sparkles}
              title="Custom Styling"
              description="Every setup is uniquely decorated with beautiful details."
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Professional Care"
              description="Hygienic, safe, and professional setups every single time."
            />
          </div>
        </div>
      </section>

      {/* Featured Theme Callout */}
      <section className="py-20 bg-rose-50 px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-20 flex flex-col justify-center space-y-8">
            <h2 className="text-4xl font-bold text-slate-800 serif leading-tight">Pick a Theme, <br /> Any Theme.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether they're dreaming of a Movie Night, a Safari adventure, or a glittery Eras celebration, we have the perfect theme to match their personality.
            </p>
            <Link to="/themes" className="text-rose-400 font-bold text-lg flex items-center space-x-2 group">
              <span>View our magical themes</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="h-96 lg:h-auto overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1544623026-6ff441314a97?auto=format&fit=crop&q=80&w=1000" 
              alt="Themed setup" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 serif mb-16">What Our Dreamers Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-rose-50 shadow-sm italic text-slate-600 relative">
                <div className="flex justify-center mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="mb-6 leading-relaxed">"{t.text}"</p>
                <div className="font-bold text-slate-800 not-italic">-{t.name}, {t.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-magic-gradient text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-slate-800 serif">Ready to host the party of their dreams?</h2>
          <p className="text-xl text-slate-600">Spaces fill up fast! Inquire today to secure your date in NY or NJ.</p>
          <Link to="/booking" className="inline-block bg-rose-300 text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl hover:bg-rose-400 transition-all">
            Inquire Now
          </Link>
        </div>
      </section>
    </div>
  );
}
