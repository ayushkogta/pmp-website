import { User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function People() {
  const executiveBoard = [
    { 
      name: 'Matthew Brigham', 
      role: 'President',
      imageUrl: 'assets/matthew.png'
    },
    { 
      name: 'Brayden Waddle', 
      role: 'Director of Talent',
      imageUrl: 'assets/brayden.png'
    },
    { 
      name: 'Anneliese Lu', 
      role: 'Director of MarCom',
      imageUrl: 'assets/anneliese.png'
    },
    { 
      name: 'Jarrett Evans', 
      role: 'Director of Finance',
      imageUrl: 'assets/jarrett.png'
    },
    { 
      name: 'Ani Ashok', 
      role: 'Director of Project Excellence',
      imageUrl: 'assets/ani.png'
    },
    { 
      name: 'Colin Gupta', 
      role: 'Director of Project Excellence, Chair',
      imageUrl: 'assets/colin.png'
    },
    { 
      name: 'Cole Miller', 
      role: 'Director of Talent, Chair',
      imageUrl: 'assets/cole.png'
    },
  ];

  const alumniImage = 'assets/alumni-companies.png';

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Meet the leaders driving innovation and excellence
          </p>
        </div>
      </section>

      {/* Executive Board Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">2026 Executive Board</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {executiveBoard.map((member) => (
              <div
                key={member.name}
                className="group w-56"
              >
                {/* Profile Picture */}
                <div className="aspect-square rounded-lg mb-4 overflow-hidden shadow-lg transition-transform group-hover:scale-105">
                  <ImageWithFallback
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where Our Alumni Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Where Our Alumni Work
          </h2>
          
          <div className="flex justify-center">
            <ImageWithFallback
              src={alumniImage}
              alt="Where Our Alumni Work"
              className="w-full max-w-4xl rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Interested in Joining?</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            We're always looking for passionate students who want to develop their project management skills. 
            Whether you're interested in leadership, technical projects, or professional development, 
            there's a place for you in our organization.
          </p>
          <a
            href="mailto:contact@pmppurdue.org"
            className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-md hover:bg-yellow-400 transition-colors font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}