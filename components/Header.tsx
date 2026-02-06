
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_URL, NAVIGATION } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src={LOGO_URL} alt="FS Moda Pet Logo" className="h-14 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {NAVIGATION.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4">
          {NAVIGATION.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-slate-600 hover:text-blue-600 font-medium text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
