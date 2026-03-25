import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'People', path: '/people' },
    { name: 'Projects', path: '/projects' },
    { name: 'Apply', path: '/apply' },
  ];

  return (
    <header className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with spacing */}
          <Link to="/" className="flex-shrink-0 mr-6">
            <ImageWithFallback
              src="/assets/logo.png"
              alt="Project Management at Purdue Logo"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base transition-colors font-medium ${
                  location.pathname === link.path
                    ? 'text-white border-b-2 border-yellow-500 pb-1'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Hamburger Button (mobile only) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black border-t border-gray-800 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-base font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-yellow-500'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}