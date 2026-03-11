import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      company: 'Nike',
      title: 'Innovative Footwear Design',
      description: 'Our team spent a semester conceptualizing and designing a revolutionary new shoe concept. We explored sustainable materials, ergonomic design principles, and cutting-edge manufacturing techniques to create a next-generation athletic footwear solution.',
      skills: ['Product Design', 'Market Research', 'Sustainability Analysis', 'Prototyping'],
      imageUrl: 'assets/nike-showcase.png',
    },
    {
      company: 'Apple',
      title: 'Next-Gen Product Development',
      description: 'Working on conceptual products for Apple\'s ecosystem, including innovative accessories and features for Macs, AirPods, and iPhones. Our focus is on enhancing user experience through seamless integration and thoughtful design.',
      skills: ['UX Design', 'Product Strategy', 'Innovation Management', 'User Research'],
      imageUrl: 'assets/placeholder.png',
    },
    {
      company: 'Rolls-Royce',
      title: 'Engineering Excellence Initiative',
      description: 'Collaborating on a project focused on precision engineering and luxury innovation. Our team applies project management methodologies to conceptualize improvements in manufacturing processes and product excellence.',
      skills: ['Process Optimization', 'Quality Management', 'Technical Documentation', 'Stakeholder Management'],
      imageUrl: 'assets/placeholder.png',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl">
            Real-world project management experience through conceptual collaborations with industry leaders
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

                {/* Image */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="rounded-lg overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src={project.imageUrl}
                      alt={`${project.company} project`}
                      className="w-full h-96 object-cover"
                    />
                  </div>
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
            href="mailto:contact@pmppurdue.org"
            className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-md hover:bg-yellow-400 transition-colors font-medium"
          >
            Join Us Today
          </a>
        </div>
      </section>
    </div>
  );
}