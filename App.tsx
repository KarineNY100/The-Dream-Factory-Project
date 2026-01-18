
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X, Heart, Instagram, Facebook, Mail, Phone, MapPin, ChevronRight, Star } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Themes from './pages/Themes';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

const Logo = ({ className = "h-12 w-12" }: { className?: string }) => (
  <div className={`${className} bg-[#4a4a4a] rounded-full flex flex-col items-center justify-center p-1 border-2 border-white shadow-sm`}>
    <svg viewBox="0 0 100 100" className="w-full h-full text-[#f8c8d4] fill-current">
      <path d="M50 15 L20 85 L30 85 L50 35 L70 85 L80 85 Z" />
      <path d="M45 10 L55 10 L50 25 Z" />
    </svg>
    <div className="text-[5px] text-white font-bold leading-none uppercase tracking-tighter text-center">
      The Dream<br/>Factory
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Themes', path: '/themes' },
    { name: 'Packages', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Our Story', path: '/about' },
    { name: 'FAQ & Contact', path: '/contact' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-3">
            <Logo className="h-12 w-12" />
            <span className="text-2xl font-bold text-slate-800 tracking-tight serif">The Dream Factory</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-slate-600 hover:text-rose-400 transition-colors text-sm font-medium ${location.pathname === link.path ? 'text-rose-500 font-semibold' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-rose-300 hover:bg-rose-400 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book Now
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-rose-50 absolute w-full slide-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-4 text-slate-700 font-medium hover:text-rose-400 text-lg"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="w-full text-center bg-rose-300 text-white px-3 py-4 rounded-b-lg font-bold"
            >
              Book My Magic
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-rose-50 pt-16 pb-8 border-t border-rose-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-1">
        <div className="flex items-center space-x-3 mb-6">
          <Logo className="h-10 w-10" />
          <span className="text-xl font-bold text-slate-800 serif">The Dream Factory</span>
        </div>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Rockland & Bergen's premier indoor teepee party experience. Full-service rental and custom setups for your little dreamers.
        </p>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/thedreamfactoryny/" target="_blank" rel="noopener noreferrer" className="text-rose-300 hover:text-rose-500 transition-colors"><Instagram className="h-6 w-6" /></a>
          <a href="#" className="text-rose-300 hover:text-rose-500 transition-colors"><Facebook className="h-6 w-6" /></a>
          <a href="mailto:thedreamfactoryny8@gmail.com" className="text-rose-300 hover:text-rose-500 transition-colors"><Mail className="h-6 w-6" /></a>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold text-slate-800 mb-6 serif text-lg">Quick Links</h4>
        <ul className="space-y-4 text-slate-600">
          <li><Link to="/themes" className="hover:text-rose-400">Our Themes</Link></li>
          <li><Link to="/services" className="hover:text-rose-400">Packages</Link></li>
          <li><Link to="/gallery" className="hover:text-rose-400">Gallery</Link></li>
          <li><Link to="/booking" className="hover:text-rose-400">Book Now</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-slate-800 mb-6 serif text-lg">Contact Us</h4>
        <ul className="space-y-4 text-slate-600">
          <li className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-rose-300" />
            <span>thedreamfactoryny8@gmail.com</span>
          </li>
          <li className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-rose-300" />
            <span>Rockland, NY | Bergen, NJ</span>
          </li>
          <li className="flex items-center space-x-3">
            <Instagram className="h-5 w-5 text-rose-300" />
            <span>@thedreamfactoryny</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-slate-800 mb-6 serif text-lg">Our Vibe</h4>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <img key={i} src={`https://picsum.photos/seed/${i+100}/150/150`} alt="Insta Grid" className="rounded-md w-full h-16 object-cover opacity-80 hover:opacity-100 transition-opacity" />
          ))}
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-rose-100 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
      <p>© 2024 The Dream Factory NY. All rights reserved.</p>
      <p className="flex items-center space-x-1 mt-2 md:mt-0">
        <span>Made with</span>
        <Heart className="h-4 w-4 text-rose-300 fill-current" />
        <span>by Ali for Dreamers</span>
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/themes" element={<Themes />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
