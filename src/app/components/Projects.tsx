import { useState, useCallback, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  onImageClick: (index: number) => void;
}

function ImageCarousel({ images, onImageClick }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative group">
      <div
        className="rounded-lg overflow-hidden shadow-xl cursor-pointer"
        onClick={() => onImageClick(current)}
      >
        <ImageWithFallback
          src={images[current].src}
          alt={images[current].alt}
          className="w-full h-auto object-contain"
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? 'bg-yellow-500' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

interface LightboxProps {
  images: { src: string; alt: string }[];
  startIndex: number;
  onClose: () => void;
}

function Lightbox({ images, startIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)), [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
        aria-label="Close"
      >
        <X className="w-8 h-8" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      <div className="max-w-5xl max-h-[90vh] px-4" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="max-w-full max-h-[85vh] object-contain mx-auto rounded-lg"
        />
        {images.length > 1 && (
          <p className="text-center text-white/60 text-sm mt-3">
            {current + 1} / {images.length}
          </p>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const [lightbox, setLightbox] = useState<{ images: { src: string; alt: string }[]; index: number } | null>(null);

  const projects = [
    {
      company: 'Nike',
      title: 'Innovative Footwear Design',
      description: 'We developed new shoe concepts over the course of a semester. In order to develop a next-generation athletic footwear solution, we investigated sustainable materials, ergonomic design concepts, and state-of-the-art production procedures.',
      skills: ['Product Design', 'Market Research', 'Sustainability Analysis', 'Prototyping'],
      images: [
        { src: 'assets/nike-showcase.png', alt: 'Nike project showcase' },
        { src: 'assets/placeholder.png', alt: 'Nike project image 2' },
        { src: 'assets/placeholder.png', alt: 'Nike project image 3' },
      ],
    },
    {
      company: 'Apple',
      title: 'Next-Gen Product Development',
      description: 'Working on conceptual products for Apple\'s ecosystem, including innovative accessories and features for Macs, AirPods, and iPhones. Our goal is to improve user experience by intelligent design and smooth integration.',
      skills: ['UX Design', 'Product Strategy', 'Innovation Management', 'User Research'],
      images: [
        { src: 'assets/apple-photos/team1.JPG', alt: 'Apple project image 1' },
        { src: 'assets/apple-photos/team2.JPG', alt: 'Apple project image 2' },
        { src: 'assets/apple-photos/team3.JPG', alt: 'Apple project image 3' },
        { src: 'assets/apple-photos/pres1.JPG', alt: 'Apple project image 3' },
        { src: 'assets/apple-photos/pres4.JPG', alt: 'Apple project image 3' },
        { src: 'assets/apple-photos/pres2.JPG', alt: 'Apple project image 3' },
        { src: 'assets/apple-photos/pres3.JPG', alt: 'Apple project image 3' }
      ],
    },
    {
      company: 'Rolls-Royce',
      title: 'Engineering Excellence Initiative',
      description: 'We worked on a project that emphasises premium innovation and precision engineering. Our club used project management techniques to develop ideas for better manufacturing procedures and product excellence.',
      skills: ['Process Optimization', 'Quality Management', 'Technical Documentation', 'Stakeholder Management'],
      images: [
        { src: 'assets/placeholder.png', alt: 'Rolls-Royce project image 1' },
        { src: 'assets/placeholder.png', alt: 'Rolls-Royce project image 2' },
        { src: 'assets/placeholder.png', alt: 'Rolls-Royce project image 3' },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl">
            Real-world Project Management experience through conceptual collaborations with industry leaders
          </p>
        </div>
      </section>

      {/* Note about projects */}
      <section className="py-6 bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-700 text-sm">
            <strong>Note:</strong> These are educational concept projects designed to develop our members' project management skills. 
            We are not officially affiliated with or sponsored by these companies.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.company}
                className={`grid md:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="inline-block bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    {project.company}
                  </div>
                    
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                      Skills Developed
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Carousel */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <ImageCarousel
                    images={project.images}
                    onImageClick={(imgIndex) => setLightbox({ images: project.images, index: imgIndex })}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Want to Work on Exciting Projects?</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Join our team and gain hands-on experience managing real-world projects. 
            Develop your skills, build your resume, and make an impact.
          </p>
          <a
            href="https://www.instagram.com/projectmanagementpurdue/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-md hover:bg-yellow-400 transition-colors font-medium"
          >
            Join Us Today
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}