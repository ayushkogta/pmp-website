import { Link, useLocation } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Header() {
  const location = useLocation();
  
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
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <ImageWithFallback
              src="/assets/logo.png"
              alt="Project Management at Purdue Logo"
              className="h-14 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
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
        </div>
      </div>
    </header>
  );
}