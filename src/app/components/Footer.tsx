import { Link } from 'react-router';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'People', path: '/people' },
    { name: 'Projects', path: '/projects' },
    { name: 'Apply', path: '/apply' },
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://www.instagram.com/projectmanagementpurdue/',
      ariaLabel: 'Follow us on Instagram'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/project-management-at-purdue/',
      ariaLabel: 'Connect with us on LinkedIn'
    },
    { 
      name: 'Email', 
      icon: Mail, 
      href: 'mailto:projectmanagementpurdue@gmail.com',
      ariaLabel: 'Send us an email'
    },
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Club Name */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Project Management at Purdue</h3>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Navigation Links */}
          <div>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-400 hover:text-white transition-colors w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 md:justify-end">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}