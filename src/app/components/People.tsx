import { User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function People() {
  const executiveBoard = [
    { name: 'Matthew Brigham', role: 'President' },
    { name: 'Brayden Waddle', role: 'Director of Talent' },
    { name: 'Anneliese Lu', role: 'Director of MarCom' },
    { name: 'Jarrett Evans', role: 'Director of Finance' },
    { name: 'Ani Ashok', role: 'Director of Project Excellence' },
    { name: 'Colin Gupta', role: 'Director of Project Excellence, Chair' },
    { name: 'Cole Miller', role: 'Director of Talent, Chair' },
  ];

  const alumniCompanies = [
    { name: 'Deloitte', imageUrl: 'https://images.unsplash.com/photo-1763933356190-6e86bb9faad8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxvaXR0ZSUyMGNvbnN1bHRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzczMTU4ODY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { name: 'Google', imageUrl: 'https://images.unsplash.com/photo-1592096304832-62463bfdc822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjB0ZWNoJTIwb2ZmaWNlfGVufDF8fHx8MTc3MzE1ODg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { name: 'Microsoft', imageUrl: 'https://images.unsplash.com/photo-1768006273705-760cf15058e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NvZnQlMjBoZWFkcXVhcnRlcnMlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzMxNTg4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { name: 'Amazon', imageUrl: 'https://images.unsplash.com/photo-1761866299864-3fb0de4d255a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWF6b24lMjBvZmZpY2UlMjBoZWFkcXVhcnRlcnN8ZW58MXx8fHwxNzczMTU4ODcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { name: 'BCG', imageUrl: 'https://images.unsplash.com/photo-1723325650065-dc04e697980c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3N0b24lMjBjb25zdWx0aW5nJTIwZ3JvdXAlMjBvZmZpY2V8ZW58MXx8fHwxNzczMTU4ODcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { name: 'Apple', imageUrl: 'https://images.unsplash.com/photo-1679010936793-d8b99fa292bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGhlYWRxdWFydGVycyUyMGN1cGVydGlub3xlbnwxfHx8fDE3NzMxNTg4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  ];

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
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {executiveBoard.map((member) => (
              <div
                key={member.name}
                className="group"
              >
                {/* Profile Picture Placeholder */}
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 aspect-square rounded-lg mb-4 flex items-center justify-center overflow-hidden shadow-lg transition-transform group-hover:scale-105">
                  <User className="w-20 h-20 text-black opacity-30" />
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {alumniCompanies.map((company) => (
              <div
                key={company.name}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-video"
              >
                <ImageWithFallback
                  src={company.imageUrl}
                  alt={company.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
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